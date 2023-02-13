package com.sashazhenia.vocabulary.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document("cyrillicWord")
@Data
@Builder
public class CyrillicWord {

    @Id
    private String id;

    private String name;

    private Language language;

    private LocalDateTime lastUpdate;

    private LocalDateTime created;

}
