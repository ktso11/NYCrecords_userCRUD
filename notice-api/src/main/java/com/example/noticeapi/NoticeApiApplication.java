package com.example.noticeapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class NoticeApiApplication {
	@RequestMapping("/notices")
	public String home() {
		return "some notices";
	}


	public static void main(String[] args) {
		SpringApplication.run(NoticeApiApplication.class, args);
	}
}
