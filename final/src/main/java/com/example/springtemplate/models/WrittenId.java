package com.example.springtemplate.models;

import javax.persistence.JoinColumn;
import java.io.Serializable;

public class WrittenId implements Serializable {
    private Integer book_id;

    private Integer author_id;
}
