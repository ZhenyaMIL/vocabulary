package com.sashazhenia.vocabulary.controller;

import com.sashazhenia.vocabulary.model.EnglishWord;
import com.sashazhenia.vocabulary.model.dto.AddNewWordDto;
import com.sashazhenia.vocabulary.service.WordService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Validated
public class WordController {

    private final WordService wordService;

    @GetMapping(value = "/api/v1/findAllWords")
    public List<EnglishWord> findAllWords() {
        return wordService.findAllWords();
    }

    @PostMapping(value = "/api/v1/addNewWord")
    public void addNewWord(@RequestBody AddNewWordDto addNewWordDto) {
        wordService.addNewWord(addNewWordDto);
    }

}
