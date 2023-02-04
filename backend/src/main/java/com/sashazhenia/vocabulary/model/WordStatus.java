package com.sashazhenia.vocabulary.model;

import lombok.Getter;

public enum WordStatus {

    IN_PROGRESS("In progress"),

    CREATED("Created");

    @Getter
    private String value;

    WordStatus(String value) {
        this.value = value;
    }

    public String toString() {
        return String.valueOf(this.value);
    }

}
