package com.example.noticeapi.repositories;
import com.example.noticeapi.models.Notice;
import org.springframework.data.repository.CrudRepository;



public interface NoticeRepository extends CrudRepository<Notice, Long>  {
     Notice findByNoticeid(long noticeid);
}
