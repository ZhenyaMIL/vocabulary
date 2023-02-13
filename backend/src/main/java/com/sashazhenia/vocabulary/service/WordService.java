package com.sashazhenia.vocabulary.service;

import com.sashazhenia.vocabulary.exception.CyrillicSymbolsInEnglishWordException;
import com.sashazhenia.vocabulary.model.CyrillicWord;
import com.sashazhenia.vocabulary.model.EnglishWord;
import com.sashazhenia.vocabulary.model.WordStatus;
import com.sashazhenia.vocabulary.model.dto.AddNewWordDto;
import com.sashazhenia.vocabulary.repository.CyrillicWordRepository;
import com.sashazhenia.vocabulary.repository.EnglishWordRepository;
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

    private final EnglishWordRepository englishWordRepository;

    private final CyrillicWordRepository cyrillicWordRepository;

    public List<EnglishWord> findAllWords() {
        return englishWordRepository.findAll();
    }

    public void addNewWordIfNotExists(AddNewWordDto addNewWordDto) {
        String englishWord = addNewWordDto.englishWord();

        if (Pattern.matches(CYRILLIC_CHECK_REGEXP, englishWord)) {
            throw new CyrillicSymbolsInEnglishWordException();
        }

        EnglishWord existedEnglishWord = englishWordRepository.findByEnglishWord(englishWord);

        if (existedEnglishWord != null) {
            List<CyrillicWord> existedCyrillicWords = existedEnglishWord.getCyrillicWords();
            existedCyrillicWords.add(createNewCyrillicWord(addNewWordDto));
            englishWordRepository.save(existedEnglishWord);

        } else {
            List<CyrillicWord> cyrillicWords = new ArrayList<>();
            cyrillicWords.add(createNewCyrillicWord(addNewWordDto));

            EnglishWord newEnglishWord = EnglishWord.builder()
                    .cyrillicWords(cyrillicWords)
                    .englishWord(addNewWordDto.englishWord())
                    .status(WordStatus.NEW)
                    .created(LocalDateTime.now())
                    .lastUpdate(LocalDateTime.now())
                    .timesWordAppeared(0)
                    .rightAnswersCount(0)
                    .build();

            englishWordRepository.insert(newEnglishWord);
        }
    }

    private CyrillicWord createNewCyrillicWord(AddNewWordDto addNewWordDto) {
        CyrillicWord cyrillicWord = CyrillicWord.builder()
                .created(LocalDateTime.now())
                .lastUpdate(LocalDateTime.now())
                .name(addNewWordDto.cyrillicWord())
                .language(addNewWordDto.language())
                .build();

        return cyrillicWordRepository.insert(cyrillicWord);
    }

}
