package com.example.noticeapi.models;
import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@Getter @Setter
@Entity
@Table(name = "NOTICES")
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NOTICEID")
    private String noticeid;

    @Column(name = "FAVBY")
    private String favby;

    public Notice() {
    }
}
