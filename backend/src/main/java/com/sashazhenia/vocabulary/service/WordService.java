package com.sashazhenia.vocabulary.service;

import com.sashazhenia.vocabulary.exception.CyrillicSymbolsInEnglishWordException;
import com.sashazhenia.vocabulary.model.CyrillicWord;
import com.sashazhenia.vocabulary.model.EnglishWord;
import com.sashazhenia.vocabulary.model.WordStatus;
import com.sashazhenia.vocabulary.model.dto.AddNewWordDto;
import com.sashazhenia.vocabulary.repository.WordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

@AllArgsConstructor
@Service
public class WordService {

    private static final String CYRILLIC_CHECK_REGEXP = ".*\\p{InCyrillic}.*";

    private final WordRepository wordRepository;

    public List<EnglishWord> findAllWords() {
        return wordRepository.findAll();
    }

    public void addNewWord(AddNewWordDto addNewWordDto) {
        if (Pattern.matches(CYRILLIC_CHECK_REGEXP, addNewWordDto.englishWord())) {
            throw new CyrillicSymbolsInEnglishWordException();
        }

        List<CyrillicWord> cyrillicWords = new ArrayList<>();
        cyrillicWords.add(createNewCyrillicWord(addNewWordDto));

        EnglishWord englishWord = EnglishWord.builder()
                .cyrillicWords(cyrillicWords)
                .englishWord(addNewWordDto.englishWord())
                .status(WordStatus.NEW)
                .created(LocalDateTime.now())
                .lastUpdate(LocalDateTime.now())
                .timesWordAppeared(0)
                .rightAnswersCount(0)
                .build();

        wordRepository.insert(englishWord);
    }

    private CyrillicWord createNewCyrillicWord(AddNewWordDto addNewWordDto) {
        return CyrillicWord.builder()
                .created(LocalDateTime.now())
                .lastUpdate(LocalDateTime.now())
                .name(addNewWordDto.cyrillicWord())
                .language(addNewWordDto.language())
                .build();
    }

}
