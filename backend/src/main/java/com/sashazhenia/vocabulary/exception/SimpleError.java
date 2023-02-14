package com.sashazhenia.vocabulary.exception;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SimpleError {

    private String message;

    private String key;

}
