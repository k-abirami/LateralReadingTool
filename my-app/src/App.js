import React from 'react';
import ArticleDisplay from './ArticleDisplay';
//import StickyNotes from './StickyNotes';
import RightPanel from './RightPanel';
import './App.css';

function App() {
  const articleTitle = "The Mask Mandates Did Nothing. Will Any Lessons Be Learned?";
  const articleContent = `
    OPINION
BRET STEPHENS
The Mask Mandates Did Nothing. Will Any Lessons Be Learned?
Feb. 21, 2023
3.8K
Bret Stephens
By Bret Stephens
Opinion Columnist
The most rigorous and comprehensive analysis of scientific studies conducted on the efficacy of masks for reducing the spread of respiratory illnesses — including Covid-19 — was published late last month. Its conclusions, said Tom Jefferson, the Oxford epidemiologist who is its lead author, were unambiguous.
“There is just no evidence that they” — masks — “make any difference,” he told the journalist Maryanne Demasi. “Full stop.”
But, wait, hold on. What about N-95 masks, as opposed to lower-quality surgical or cloth masks?
“Makes no difference — none of it,” said Jefferson.
What about the studies that initially persuaded policymakers to impose mask mandates?
“They were convinced by nonrandomized studies, flawed observational studies.”
What about the utility of masks in conjunction with other preventive measures, such as hand hygiene, physical distancing or air filtration?
“There’s no evidence that many of these things make any difference.”
These observations don’t come from just anywhere. Jefferson and 11 colleagues conducted the study for Cochrane, a British nonprofit that is widely considered the gold standard for its reviews of health care data. The conclusions were based on 78 randomized controlled trials, six of them during the Covid pandemic, with a total of 610,872 participants in multiple countries. And they track what has been widely observed in the United States: States with mask mandates fared no better against Covid than those without.
No study — or study of studies — is ever perfect. Science is never absolutely settled. What’s more, the analysis does not prove that proper masks, properly worn, had no benefit at an individual level. People may have good personal reasons to wear masks, and they may have the discipline to wear them consistently. Their choices are their own.
But when it comes to the population-level benefits of masking, the verdict is in: Mask mandates were a bust. Those skeptics who were furiously mocked as cranks and occasionally censored as “misinformers” for opposing mandates were right. The mainstream experts and pundits who supported mandates were wrong. In a better world, it would behoove the latter group to acknowledge their error, along with its considerable physical, psychological, pedagogical and political costs.
Don’t count on it. In congressional testimony this month, Rochelle Walensky, director of the Centers for Disease Control and Prevention, called into question the Cochrane analysis’s reliance on a small number of Covid-specific randomized controlled trials and insisted that her agency’s guidance on masking in schools wouldn’t change. If she ever wonders why respect for the C.D.C. keeps falling, she could look to herself, and resign, and leave it to someone else to reorganize her agency.
That, too, probably won’t happen: We no longer live in a culture in which resignation is seen as the honorable course for public officials who fail in their jobs.
But the costs go deeper. When people say they “trust the science,” what they presumably mean is that science is rational, empirical, rigorous, receptive to new information, sensitive to competing concerns and risks. Also: humble, transparent, open to criticism, honest about what it doesn’t know, willing to admit error.
The C.D.C.’s increasingly mindless adherence to its masking guidance is none of those things. It isn’t merely undermining the trust it requires to operate as an effective public institution. It is turning itself into an unwitting accomplice to the genuine enemies of reason and science — conspiracy theorists and quack-cure peddlers — by so badly representing the values and practices that science is supposed to exemplify.
It also betrays the technocratic mind-set that has the unpleasant habit of assuming that nothing is ever wrong with the bureaucracy’s well-laid plans — provided nobody gets in its way, nobody has a dissenting point of view, everyone does exactly what it asks, and for as long as officialdom demands. This is the mentality that once believed that China provided a highly successful model for pandemic response.
Yet there was never a chance that mask mandates in the United States would get anywhere close to 100 percent compliance or that people would or could wear masks in a way that would meaningfully reduce transmission. Part of the reason is specific to American habits and culture, part of it to constitutional limits on government power, part of it to human nature, part of it to competing social and economic necessities, part of it to the evolution of the virus itself.
But whatever the reason, mask mandates were a fool’s errand from the start. They may have created a false sense of safety — and thus permission to resume semi-normal life. They did almost nothing to advance safety itself. The Cochrane report ought to be the final nail in this particular coffin.
There’s a final lesson. The last justification for masks is that, even if they proved to be ineffective, they seemed like a relatively low-cost, intuitively effective way of doing something against the virus in the early days of the pandemic. But “do something” is not science, and it shouldn’t have been public policy. And the people who had the courage to say as much deserved to be listened to, not treated with contempt. They may not ever get the apology they deserve, but vindication ought to be enough.
The Times is committed to publishing a diversity of letters to the editor. We’d like to hear what you think about this or any of our articles. Here are some tips. And here’s our email: letters@nytimes.com.
Follow The New York Times Opinion section on Facebook, Twitter (@NYTopinion) and Instagram.
Bret Stephens has been an Opinion columnist with The Times since April 2017. He won a Pulitzer Prize for commentary at The Wall Street Journal in 2013 and was previously editor in chief of The Jerusalem Post.
  `;

  return (
    <div className="app-container">
      <ArticleDisplay title={articleTitle} content={articleContent} />
      <RightPanel />
      
    </div>
  );
}

export default App;






/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
