package com.sashazhenia.vocabulary.service;

import com.sashazhenia.vocabulary.model.WordItem;
import com.sashazhenia.vocabulary.model.WordStatus;
import com.sashazhenia.vocabulary.model.dto.AddNewWordDto;
import com.sashazhenia.vocabulary.repository.WordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Service
public class WordService {

    private final WordRepository wordRepository;

    public List<WordItem> findAllWords() {
        return wordRepository.findAll();
    }

    public void addNewWord(AddNewWordDto addNewWordDto) {
        WordItem wordItem = new WordItem();
        wordItem.setRussianWord(addNewWordDto.russianWord());
        wordItem.setEnglishName(addNewWordDto.englishName());
        wordItem.setLastUpdate(LocalDateTime.now());
        wordItem.setStatus(WordStatus.CREATED);

        wordRepository.insert(wordItem);
    }

}
