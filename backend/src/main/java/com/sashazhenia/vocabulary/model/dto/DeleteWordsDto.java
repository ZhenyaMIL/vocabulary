package com.sashazhenia.vocabulary.model.dto;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record DeleteWordsDto(

        @NotEmpty
        List<String> ids

) {
}
