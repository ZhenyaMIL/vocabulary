package com.sashazhenia.vocabulary.exception;

public class CyrillicSymbolsInEnglishWordException extends RuntimeException {

    public static final String EXCEPTION_TEXT = "You have cyrillic symbols in your english word";

    public CyrillicSymbolsInEnglishWordException() {
        super(EXCEPTION_TEXT);
    }

}
