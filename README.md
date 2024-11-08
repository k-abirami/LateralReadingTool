# Automating Lateral Reading: Bridging the Gap Between Information and Credibility

**Sarah Wilson, Abirami Karthikeyan**  
University of Waterloo, Data Systems Group  
Fall 2024

## Research Context and Problem Statement

In an era of online misinformation, it’s crucial to develop strategies that help users critically assess the credibility of the information they encounter. *Lateral reading*, a method where one reads across multiple sources rather than relying on a single one, is a newly researched field. Lateral reading encourages individuals to cross-check facts by consulting a range of independent sources, which can reveal inconsistencies or biases that might go unnoticed when relying on a single source. 

Given the rise of misinformation and limited research in this field, there is a need for tools that can assist users in adopting lateral reading practices more efficiently. Researchers through previous work have created structured courses to teach users how to perform lateral reading, but there is a lack of an effective tool that assists users in practicing lateral reading. Studies such as Brodsky et al. (2023) [1] and Brodsky et al. (2021) [2] have shown the effectiveness of teaching lateral reading techniques. We want to create and enhance the lateral reading tool from *ReadProbe* [3] to enable users to compare perspectives and fact-check claims more effectively.



## Proposed Solution

Our solution is to implement an interactive web interface designed to teach users how to effectively engage in lateral reading. This interface will present a curated selection of articles along with frequently asked questions (FAQs) related to the content. Each FAQ will include concise, informative answers to clarify the key points of the articles. These questions and answers would be customized for each article. We aim to demonstrate that an automated system can be just as effective in teaching lateral reading as a person.

To enhance the learning experience, the interface will feature embedded links to the original sources cited in the articles. This will not only provide users with direct access to the source material but also foster a habit of verifying information against primary resources. We believe that encouraging users to actively fact-check the claims made in the articles will cultivate a more discerning approach to information consumption.

## Evaluation Plan

We will determine if our system is successful in the form of a user study. In our user study, we will evaluate the impact of our system by dividing participants into three distinct groups: Group 1 (Control Group), Group 2 (Manual Teaching Group), and Group 3 (System Group).

- **Group 1** will engage with articles without any guidance on lateral reading techniques. They will have access to the internet but will not receive any structured support.
- **Group 2** will receive direct instruction on how to laterally read from a trained facilitator. This group will engage with the same articles and will be encouraged to use the internet for further exploration.
- **Group 3** will use our interface, which displays FAQs, embedded links, and encourages internet searches to evaluate the trustworthiness of the articles.

We will employ eye-tracking and screen-recording technology on all groups to analyze their interactions with the provided materials and their internet browsing behaviors. The aim is to determine if participants actively engage with the FAQs from Group 3 and if their search queries reflect a critical approach to assessing article credibility.

Concluding the article readings, all participants will complete a survey evaluating their perceptions of the articles’ trustworthiness and the reasoning behind their evaluations. We anticipate that Group 3 will perform on par with Group 2, showing that our system can effectively teach lateral reading skills comparable to personal instruction, with both surpassing Group 1 without any lateral reading instruction.

Furthermore, by screen-recording and analyzing the search queries from participants, we will gather valuable data on their queries, which will inform future updates to our interface and FAQs. This will allow us to continuously refine our approach based on user interactions.


## References

[1] Jessica E. Brodsky, Patricia J. Brooks, Dimitri Pavlounis, and Jessica Leigh Johnston. Instruction increases Canadian students’ preference for and use of lateral reading strategies to fact-check online information. *SageJournals* (American Educational Research Association), 2023.  
[2] Jessica E. Brodsky, Patricia J. Brooks, Donna Scimeca, Peter Galati, Ralitsa Todorova, and Michael Caulfield. Associations between online instruction in lateral reading strategies and fact-checking COVID-19 news among college students. *SageJournals* (American Educational Research Association), 2021.  
[3] Dake Zhang and Ronak Pradeep. ReadProbe: A demo of retrieval-enhanced large language models to support lateral reading. *ResearchGate*, 2023.


## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/LateralReadingTool.git
