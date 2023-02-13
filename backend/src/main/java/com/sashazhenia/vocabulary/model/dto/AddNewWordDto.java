package com.sashazhenia.vocabulary.model.dto;

import com.sashazhenia.vocabulary.model.Language;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;

@Validated
public record AddNewWordDto(

        @NotEmpty
        String englishWord,

        @NotEmpty
        String cyrillicWord,

        @NotNull
        Language language

) {
}
