package com.sashazhenia.vocabulary.exception;

public class CyrillicWordAlreadyExistsException extends RuntimeException {

    public static final String EXCEPTION_TEXT = "Cyrillic translation already exists for english word %s";

    public CyrillicWordAlreadyExistsException(String englishWord) {
        super(String.format(EXCEPTION_TEXT, englishWord));
    }
}
