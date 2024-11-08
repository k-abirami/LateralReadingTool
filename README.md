# Automating Lateral Reading: Bridging the Gap Between Information and Credibility

**Sarah Wilson, Abirami Karthikeyan**  
University of Waterloo, Data Systems Group  
Fall 2024

## Research Context and Problem Statement

In today's digital age, combating misinformation is more critical than ever. A key strategy for evaluating the credibility of information is **lateral reading**, a method where individuals cross-check facts by consulting multiple independent sources rather than relying on a single one. This approach helps reveal inconsistencies, biases, and inaccuracies that may go unnoticed when relying on one source. However, despite the importance of lateral reading, there is a lack of effective tools to help users adopt these practices efficiently.

Previous research, such as studies by Brodsky et al. (2021) and Brodsky et al. (2023), has highlighted the effectiveness of teaching lateral reading techniques through structured courses. However, there remains a gap in providing tools that help users practice lateral reading independently. Our project aims to enhance the **ReadProbe** tool, which supports users in comparing perspectives and fact-checking claims, by integrating lateral reading practices into a user-friendly interface.

## Proposed Solution

Our solution is an interactive **web interface** designed to teach users how to engage in lateral reading effectively. This interface will present curated articles, each accompanied by tailored **Frequently Asked Questions (FAQs)** that clarify key points of the content. These FAQs will be customized for each article, offering concise, informative answers that help users better understand and critically evaluate the material.

To support the lateral reading process, we will embed links to the original sources cited within the articles. This feature encourages users to verify the information directly against primary sources, fostering a habit of fact-checking. By automating this process, we aim to demonstrate that a system can teach lateral reading as effectively as personal instruction.

## Evaluation Plan

To assess the effectiveness of our system, we will conduct a **user study** with three groups:

1. **Group 1 (Control Group)**: Participants will engage with articles without any guidance on lateral reading techniques. They will have access to the internet but will not receive structured support.

2. **Group 2 (Manual Teaching Group)**: Participants will receive direct instruction on lateral reading from a trained facilitator and will be encouraged to use the internet for further exploration of the articles.

3. **Group 3 (System Group)**: Participants will use our system, which features FAQs, embedded links, and prompts for internet searches to assess the credibility of the articles.

We will monitor participants' interactions using **eye-tracking** and **screen-recording** technology to analyze their engagement with the materials and internet browsing behaviors. The goal is to determine if Group 3 participants actively use the FAQs and if their searches reflect a critical approach to assessing article trustworthiness.

At the end of the reading sessions, participants will complete a survey evaluating the trustworthiness of the articles and the reasoning behind their assessments. We expect Group 3 to perform similarly to Group 2, demonstrating that our system is as effective in teaching lateral reading as manual instruction, and both groups will outperform Group 1.

Additionally, by analyzing participants' search queries and interactions, we will gather valuable data that will inform continuous updates to our interface and FAQs, allowing us to improve the system based on user feedback and behavior.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/LateralReadingTool.git
