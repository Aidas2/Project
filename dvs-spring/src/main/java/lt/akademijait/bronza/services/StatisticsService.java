package lt.akademijait.bronza.services;

import lombok.extern.slf4j.Slf4j;
import lt.akademijait.bronza.dto.statistics.DocumentCountGetCommand;
import lt.akademijait.bronza.entities.Document;
import lt.akademijait.bronza.entities.DocumentType;
import lt.akademijait.bronza.entities.User;
import lt.akademijait.bronza.entities.UserGroup;
import lt.akademijait.bronza.enums.DocumentState;
import lt.akademijait.bronza.repositories.DocumentRepository;
import lt.akademijait.bronza.repositories.DocumentTypeRepository;
import lt.akademijait.bronza.repositories.UserGroupRepository;
import lt.akademijait.bronza.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;

@Service
@Slf4j
public class StatisticsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserGroupRepository userGroupRepository;

    @Autowired
    private DocumentTypeRepository documentTypeRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Transactional
    public Long getAllUsersCount() {
        log.info("The count of all registered users was gotten");
        return (long) userRepository.findAll().size();
    }

    @Transactional
    public Long getAllDocumentsCount() {
        log.info("The count of all created documents was gotten");
        return (long) documentRepository.findAll().size();
    }

    @Transactional
    public DocumentCountGetCommand getDocCountByDate(String docType, Date startDate, Date endDate) {

        List<String> count = new ArrayList<>();
        List<String> submit = new ArrayList<>();
        List<String> accept = new ArrayList<>();
        List<String> reject = new ArrayList<>();

        for (Document document : documentRepository.findAll()) {
            if (document.getDocumentType().getTitle().equals(docType)) {
                if (startDate.before(document.getCreationDate()) && endDate.after(document.getCreationDate())) {
                    count.add(document.getTitle());
                }
                if (document.getSubmissionDate() != null) {
                    if (startDate.before(document.getSubmissionDate()) && endDate.after(document.getCreationDate())) {
                        submit.add(document.getTitle());
                    }
                    if (document.getConfirmationDate() != null) {
                        if (startDate.before(document.getConfirmationDate()) && endDate.after(document.getConfirmationDate())) {
                            accept.add(document.getTitle());
                        }
                    }
                    if (document.getRejectionDate() != null) {
                        if (startDate.before(document.getRejectionDate()) && endDate.after(document.getRejectionDate())) {
                            reject.add(document.getTitle());
                        }
                    }

                }
            }
        }
        log.info("Documents which type is " + docType + " statistics from " + startDate + " to " + endDate + " by document state was gotten");
        return new DocumentCountGetCommand(
                count.size(),
                submit.size(),
                accept.size(),
                reject.size());
    }


    @Transactional
    public DocumentCountGetCommand getCountByDocumentType(String docType) {
        List<String> count = new ArrayList<>();
        List<String> submit = new ArrayList<>();
        List<String> accept = new ArrayList<>();
        List<String> reject = new ArrayList<>();

        for (Document document : documentRepository.findAll()) {
            if (document.getDocumentType().getTitle().equals(docType)) {
                count.add(document.getTitle());
                if (document.getSubmissionDate() != null) {
                    submit.add(document.getTitle());
                    if (document.getConfirmationDate() != null) {
                        accept.add(document.getTitle());
                    }
                    if (document.getRejectionDate() != null) {
                        reject.add(document.getTitle());
                    }
                }
            }
        }
        log.info("Documents which type is " + docType + " statistics by document state was gotten");
        return new DocumentCountGetCommand(
                count.size(),
                submit.size(),
                accept.size(),
                reject.size());
    }
}


