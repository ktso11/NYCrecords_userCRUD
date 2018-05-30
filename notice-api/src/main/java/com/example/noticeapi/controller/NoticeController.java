package com.example.noticeapi.controller;
import com.example.noticeapi.repositories.NoticeRepository;

import com.example.noticeapi.models.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class NoticeController {
    @Autowired
    NoticeRepository noticeRepository;

    @GetMapping("/")
    public Iterable<Notice> findAllNotices() {
        return noticeRepository.findAll();
    }

    @GetMapping("/{noticeId}")
    public Notice findnoticeById(@PathVariable Long noticeId) {
        return noticeRepository.findOne(noticeId);
    }

    @GetMapping("/{noticeNoticeId}")
    public Notice findnoticeByNoticeId(@PathVariable Long noticeNoticeId) {
        return noticeRepository.findByNoticeid(noticeNoticeId);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteNoticeById(@PathVariable Long noticeId) {
        noticeRepository.delete(noticeId);
        return HttpStatus.OK;
    }
    @PostMapping("/")
    public Notice createNewNotice(@RequestBody Notice newNotice) {
        return noticeRepository.save(newNotice);
    }
    @PatchMapping("/{noticeId}")
    public Notice updateNoticeById(@PathVariable Long noticeId, @RequestBody Notice noticeRequest) {
        Notice noticeFromDb = noticeRepository.findOne(noticeId);
        noticeFromDb.setNoticeid(noticeRequest.getNoticeid());
//        noticeFromDb.setShorttitle(noticeRequest.getShorttitle());
//        noticeFromDb.setAgencyname(noticeRequest.getAgencyname());
//        noticeFromDb.setStartdate(noticeRequest.getStartdate());
//        noticeFromDb.setEnddate(noticeRequest.getEnddate());
//        noticeFromDb.setCategorydescription(noticeRequest.getCategorydescription());
//        noticeFromDb.setTypeofnotice(noticeRequest.getTypeofnotice());
        noticeFromDb.setFavby(noticeRequest.getFavby());
        return noticeRepository.save(noticeFromDb);
    }

}
