package com.sashazhenia.vocabulary.model.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record UpdateWordDto(

        @NotEmpty
        String id,

        @NotNull
        Integer rightAnswersCount,

        Integer timesWordAppeared

) {
}
