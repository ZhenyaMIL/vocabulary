package com.sashazhenia.vocabulary.exception;

public class EnglishWordHaveNotFound extends RuntimeException {

    public static final String EXCEPTION_TEXT = "English word with id %s not found";

    public EnglishWordHaveNotFound(String id) {
        super(String.format(EXCEPTION_TEXT, id));
    }

}
