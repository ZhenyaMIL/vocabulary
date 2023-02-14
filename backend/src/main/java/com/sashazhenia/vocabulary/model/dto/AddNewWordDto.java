package com.sashazhenia.vocabulary.model.dto;

import com.sashazhenia.vocabulary.model.Language;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddNewWordDto(

        @NotBlank
        String englishWord,

        @NotBlank
        String cyrillicWord,

        @NotNull
        Language language

) {
}
