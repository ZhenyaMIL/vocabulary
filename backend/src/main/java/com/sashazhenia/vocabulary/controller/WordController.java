package com.sashazhenia.vocabulary.controller;

import com.sashazhenia.vocabulary.model.EnglishWord;
import com.sashazhenia.vocabulary.model.dto.AddNewWordDto;
import com.sashazhenia.vocabulary.model.dto.DeleteWordsDto;
import com.sashazhenia.vocabulary.service.WordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<EnglishWord> addNewWord(@RequestBody @Valid AddNewWordDto addNewWordDto) {
        return new ResponseEntity<>(
                wordService.addNewWordIfNotExists(addNewWordDto),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping(value = "/api/v1/deleteWords")
    public void deleteWords(@RequestBody @Valid DeleteWordsDto deleteWordsDto) {
        wordService.deleteWords(deleteWordsDto);
    }

}
