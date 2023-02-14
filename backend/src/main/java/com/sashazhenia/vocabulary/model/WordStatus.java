package com.sashazhenia.vocabulary.model;

import lombok.Getter;

public enum WordStatus {

    DIFFICULT("DIFFICULT"),

    NEW("NEW"),

    OTHER("OTHER");

    @Getter
    private String value;

    WordStatus(String value) {
        this.value = value;
    }

    public String toString() {
        return String.valueOf(this.value);
    }

}
