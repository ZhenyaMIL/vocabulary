package com.sashazhenia.vocabulary.model;

import lombok.Getter;

public enum Language {

    EN("en"),

    UA("ua");

    @Getter
    private String value;

    Language(String value) {
        this.value = value;
    }

    public String toString() {
        return String.valueOf(this.value);
    }

}
