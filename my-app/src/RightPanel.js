import React from 'react';
import './RightPanel.css';

const RightPanel = () => {
  const notes = [
    {
      question: "Are reviews by Cochrane a reliable source of health care data?",
      content: `
        <strong>1. Are reviews by Cochrane a reliable source of health care data?</strong>
        <p>Cochrane’s systematic reviews are highly valued because they are based on high-quality studies and are regularly updated to incorporate new research findings. This ensures that the evidence remains current and reliable [1-1]. Additionally, Cochrane does not accept commercial or conflicted funding, which helps maintain the integrity and trustworthiness of their reviews [1-2, 1-3].</p>
        <p>[1-1] <a href="https://www.cochranelibrary.com/about/about-cochrane-reviews" target="_blank" rel="noopener noreferrer">https://www.cochranelibrary.com/about/about-cochrane-reviews</a></p>
        <p>[1-2] <a href="https://blogs.bmj.com/bmj/2018/11/12/lisa-bero-more-journals-should-have-conflict-of-interest-policies-as-strict-as-cochrane/" target="_blank" rel="noopener noreferrer">https://blogs.bmj.com/bmj/2018/11/12/lisa-bero-more-journals-should-have-conflict-of-interest-policies-as-strict-as-cochrane/</a></p>
        <p>[1-3] <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1174783/" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1174783/</a></p>
      `
    },
    {
        question: "Could Tom Jefferson be considered an expert on mask mandates and the spread of respiratory illnesses?",
        content: `
          <strong>2. Could Tom Jefferson be considered an expert on mask mandates and the spread of respiratory illnesses?</strong>
          <p>Tom Jefferson is a British epidemiologist and a senior associate tutor at the University of Oxford [2-1]. Jefferson has led numerous reviews on antivirals, influenza vaccines, and physical interventions to interrupt the spread of acute respiratory infections [2-1, 2-2]. However, it is important to note that Jefferson has been involved in some controversies. He has endorsed several unorthodox views about COVID-19, and some of his writings have been republished by the Brownstone Institute, a group associated with the controversial Great Barrington Declaration [2-2, 2-3]. This has led to debates within the scientific community about his interpretations and conclusions [2-4].</p>
          <p>[2-1] <a href="https://en.wikipedia.org/wiki/Tom_Jefferson_%28epidemiologist%29" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Tom_Jefferson_%28epidemiologist%29</a></p>
          <p>[2-2] <a href="https://www.factcheck.org/2023/03/scicheck-what-the-cochrane-review-says-about-masks-for-covid-19-and-what-it-doesnt/" target="_blank" rel="noopener noreferrer">https://www.factcheck.org/2023/03/scicheck-what-the-cochrane-review-says-about-masks-for-covid-19-and-what-it-doesnt/ </a></p>
          <p>[2-3] <a href="https://en.wikipedia.org/wiki/Great_Barrington_Declaration" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Great_Barrington_Declaration</a></p>
          <p>[2-4] <a href="https://perma.cc/Z764-9ZTH" target="_blank" rel="noopener noreferrer">https://perma.cc/Z764-9ZTH</a></p>
        `
    },
    {
        question: "What are the political leanings of Bret Stephens?",
        content: `
          <strong>3. What are the political leanings of Bret Stephens?</strong>
          <p>Bret Stephens is generally identified as a conservative, particularly known for his neoconservative foreign policy views [3-1, 3-2]. He has been a prominent supporter of free-market economic policies and a robust American military presence abroad [3-3]. Stephens has also been a vocal critic of Donald Trump and the direction of the Republican Party in recent years [3-1, 3-2].</p>
          <p>[3-1] <a href="https://en.wikipedia.org/wiki/Bret_Stephens" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Bret_Stephens</a></p>
          <p>[3-2] <a href="https://www.nytimes.com/by/bret-stephens" target="_blank" rel="noopener noreferrer">https://www.nytimes.com/by/bret-stephens</a></p>
          <p>[3-3] <a href="https://www.cjr.org/criticism/bret-stephens-op-ed-new-york-times-wall-street-Journal.php" target="_blank" rel="noopener noreferrer">https://www.cjr.org/criticism/bret-stephens-op-ed-new-york-times-wall-street-Journal.php</a></p>
        `
    },
    {
        question: "What are the political leanings of the journalist Maryanne Demasi?",
        content: `
          <strong>4. What are the political leanings of the journalist Maryanne Demasi?</strong>
          <p>Maryanne Demasi is an Australian investigative journalist known for her controversial views on various health topics. She has challenged the scientific consensus on issues such as cholesterol, saturated fat, and statins [4-1]. While her political leanings are not explicitly stated, her skepticism towards established medical guidelines and her association with the Brownstone Institute, which has been criticized for spreading misinformation against vaccines, suggest that she may lean towards libertarian or anti-establishment views [4-2, 4-3].</p>
          <p>[4-1] <a href="https://en.wikipedia.org/wiki/Maryanne_Demasi" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Maryanne_Demasi</a></p>
          <p>[4-2] <a href="https://brownstone.org/author/maryanne-demasi/" target="_blank" rel="noopener noreferrer">https://brownstone.org/author/maryanne-demasi/</a></p>
          <p>[4-3] <a href="https://sciencebasedmedicine.org/the-spiritual-child-of-the-great-barrington-declaration-promotes-antivaccine-misinformation/" target="_blank" rel="noopener noreferrer">https://sciencebasedmedicine.org/the-spiritual-child-of-the-great-barrington-declaration-promotes-antivaccine-misinformation/</a></p>
        `
    },
    {
        question: "What do other sources say about the study published by Cochrane in 2023 indicating that mask mandates are not effective for reducing the spread of respiratory illnesses?",
        content: `
          <strong>What do other sources say about the study published by Cochrane in 2023 indicating that mask mandates are not effective for reducing the spread of respiratory illnesses?</strong>
          <p>FactCheck.org: The review also highlighted the limitations of the studies, such as a high risk of bias, variation in outcome measurement, and low adherence to mask-wearing interventions. [5-1] Cochrane Library: Cochrane itself issued a statement clarifying that the review has been widely misinterpreted. The review examined whether interventions to promote mask-wearing help slow the spread of respiratory viruses, and the results were inconclusive. Cochrane emphasized that the review did not address whether mask-wearing itself reduces the risk of contracting or spreading respiratory viruses due to the limitations in the primary evidence. [5-2] City Journal: This source interpreted the Cochrane review as indicating that neither surgical masks nor N95 masks have been shown to make a significant difference in reducing the spread of COVID-19 and other respiratory illnesses. They described the review as the most rigorous and extensive analysis of the scientific literature on this topic. [5-3]</p>
          <p>[5-1] <a href="https://www.factcheck.org/2023/03/scicheck-what-the-cochrane-review-says-about-masks-for-covid-19-and-what-it-doesnt/" target="_blank" rel="noopener noreferrer">https://www.factcheck.org/2023/03/scicheck-what-the-cochrane-review-says-about-masks-for-covid-19-and-what-it-doesnt/</a></p>
          <p>[5-2] <a href="https://www.cochrane.org/news/statement-physical-interventions-interrupt-or-reduce-spread-respiratory-viruses-review" target="_blank" rel="noopener noreferrer">https://www.cochrane.org/news/statement-physical-interventions-interrupt-or-reduce-spread-respiratory-viruses-review</a></p>
          <p>[5-3] <a href="https://www.city-journal.org/article/approximately-zero" target="_blank" rel="noopener noreferrer">https://www.city-journal.org/article/approximately-zero/</a></p>
        `
    }
  ];

  return (
    <div className="right-panel">
      {notes.map((note, index) => (
        <div key={index} className="note-box">
          {typeof note === 'string' ? note : <div dangerouslySetInnerHTML={{ __html: note.content }} />}
        </div>
      ))}
    </div>
  );
};

export default RightPanel;
