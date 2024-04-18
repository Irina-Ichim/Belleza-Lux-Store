package org.example;

import javax.persistence.GenerationType;

public @interface GeneratedValue {

    GenerationType strategy();

}
