import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
//     articles = [
// {
// "source": {
// "id": "axios",
// "name": "Axios"
// },
// "author": "Rebecca Falconer",
// "title": "\"Not welcome\": Rubio says U.S. is deporting visa holders who celebrated Kirk's death - Axios",
// "description": "\"Visa revocations are under way,\" he said on X.",
// "url": "https://www.axios.com/2025/09/16/kirk-death-us-revoking-visas-rubio-deportations",
// "urlToImage": "https://images.axios.com/WRszgbGH3QaDgNmfZOG3SObkwqA=/0x0:6000x3375/1366x768/2025/09/16/1757993887734.jpeg",
// "publishedAt": "2025-09-16T05:00:20Z",
// "content": "Driving the news: Fox News' Gillian Turner noted during her interview with Rubio that Deputy Secretary of State Christopher Landau had been \"calling out on social media foreigners who he says are cel… [+1350 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "CNBC"
// },
// "author": "Anniek Bao",
// "title": "Trump to sue New York Times for $15 billion, alleging defamation and libel - CNBC",
// "description": "Trump has initiated a flurry of defamation lawsuits against media companies, accusing them of false or misleading coverage.",
// "url": "https://www.cnbc.com/2025/09/16/trump-to-sue-new-york-times-for-15-billion-alleging-defamation-and-libel-.html",
// "urlToImage": "https://image.cnbcfm.com/api/v1/image/108199029-17579697862025-09-15t205457z_423233570_rc2ksgawjiy3_rtrmadp_0_usa-trump.jpeg?v=1757969910&w=1920&h=1080",
// "publishedAt": "2025-09-16T04:55:28Z",
// "content": "U.S. President Donald Trump on Monday filed a $15 billion lawsuit against The New York Times, alleging defamation and libel, and calling the newspaper a \"mouthpiece\" for the Democratic party.\r\nIn a p… [+2087 chars]"
// },
// {
// "source": {
// "id": "axios",
// "name": "Axios"
// },
// "author": "Barak Ravid",
// "title": "Israel launches offensive to occupy Gaza City - Axios",
// "description": "The Trump administration supports the ground operation but wants to see it end as soon as possible.",
// "url": "https://www.axios.com/2025/09/15/israel-gaza-city-occupation-ground-offensive",
// "urlToImage": "https://images.axios.com/iayaRwvjtnYz8V5OAbqiMDSFKq8=/0x0:5897x3317/1366x768/2025/09/15/1757971421543.jpeg",
// "publishedAt": "2025-09-16T04:42:16Z",
// "content": "<ul><li>According to the Hamas-controlled Gaza Health Ministry, almost 65,000 Palestinians most of them women and children have been killed since Israel's offensive began after Hamas' Oct. 7 attack.<… [+4037 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Rolling Stone"
// },
// "author": "Tomás Mier",
// "title": "Coachella Unveils 2026 Lineup: See Who's Joining Justin Bieber, Karol G, Sabrina Carpenter - Rolling Stone",
// "description": "Coachella 2026 shares full lineup for next year's music festival. Sabrina Carpenter, Justin Bieber, Karol G, and Anyma lead the performers.",
// "url": "http://www.rollingstone.com/music/music-news/coachella-lineup-2026-bieber-sabrina-karol-g-anyma-headline-1235426475/",
// "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/09/coachella-2026-NEW.jpg?crop=0px%2C0px%2C1800px%2C1014px&resize=1600%2C900",
// "publishedAt": "2025-09-16T04:22:17Z",
// "content": "Get out your wallets, the Coachella 2026 lineup has just been announced! On Monday, the music festival shared the full lineup for next year’s edition, scheduled for April 10-12 and 17-19. Sabrina Car… [+1779 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "CBS Sports"
// },
// "author": "Garrett Podell",
// "title": "Raiders vs. Chargers live updates, score, highlights as Justin Herbert's 2 first-half TDs has L.A. in control - CBS Sports",
// "description": "Monday night's doubleheader wrapped up with Harbaugh getting the better of Carroll",
// "url": "https://www.cbssports.com/nfl/news/raiders-vs-chargers-live-updates-game-score-monday-night-football/live/",
// "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/09/16/d88a39c6-7cfe-4821-8704-a94b37cba6df/thumbnail/1200x675/d822dc7a1305097a8628162d6c556d7e/justin-herbert.jpg",
// "publishedAt": "2025-09-16T04:07:30Z",
// "content": "It wasn't an enjoyable night for birthday boy Pete Carroll and his Las Vegas Raiders on \"Monday Night Football\" against the division rival Los Angeles Chargers. Nothing went right for the 74-year-old… [+4322 chars]"
// },
// {
// "source": {
// "id": "the-washington-post",
// "name": "The Washington Post"
// },
// "author": "Justin Jouvenal",
// "title": "Appeals court allows Federal Reserve governor Lisa Cook to keep her job - The Washington Post",
// "description": "The Trump administration had sought to remove Lisa Cook from the Federal Reserve Board before a key meeting on setting interest rates.",
// "url": "https://www.washingtonpost.com/politics/2025/09/15/lisa-cook-supreme-court-federal-reserve-firing/",
// "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LBRY4IQAEZFANAP5UQRGDXMANY_size-normalized.jpg&w=1440",
// "publishedAt": "2025-09-16T03:30:10Z",
// "content": "A divided federal appeals court on Monday ruled Federal Reserve governor Lisa Cook can keep her job, turning aside an appeal by the Trump administration that sought to fire her ahead of the central b… [+52 chars]"
// },
// {
// "source": {
// "id": "al-jazeera-english",
// "name": "Al Jazeera English"
// },
// "author": "John Power",
// "title": "Suspect in Charlie Kirk’s murder linked to scene by DNA, FBI chief says - Al Jazeera",
// "description": "FBI Director Kash Patel says 22-year-old Tyler Robinson also expressed wish to ‘take out’ Kirk in text message exchange.",
// "url": "https://www.aljazeera.com/news/2025/9/16/suspect-in-charlie-kirks-murder-linked-to-scene-by-dna-fbi-chief-says",
// "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/09/AP25258072035165-1757983155.jpg?resize=1920%2C1440",
// "publishedAt": "2025-09-16T03:22:30Z",
// "content": "DNA evidence links the suspect in the assassination of conservative American activist Charlie Kirk last week to the scene of the crime, the director of the FBI has said.\r\nDNA from a towel and a screw… [+4774 chars]"
// },
// {
// "source": {
// "id": "the-washington-post",
// "name": "The Washington Post"
// },
// "author": "Tara Copp, Samantha Schmidt, Dan Lamothe",
// "title": "U.S. kills 3 in strike on alleged drug boat from Venezuela, Trump says - The Washington Post",
// "description": "The president also signaled that his administration was preparing to take military action against Latin American cartels that move narcotics over land.",
// "url": "https://www.washingtonpost.com/national-security/2025/09/15/trump-venezuela-drug-strike/",
// "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5LV5OQQPOX4ZR5N4N5YIYMMH5Y_size-normalized.JPG&w=1440",
// "publishedAt": "2025-09-16T02:58:37Z",
// "content": "The U.S. military on Monday conducted a new attack on alleged drug smugglers from Venezuela, killing three people, President Donald Trump said on social media.\r\nThis morning, on my orders, U.S. milit… [+399 chars]"
// },
// {
// "source": {
// "id": "cbs-news",
// "name": "CBS News"
// },
// "author": "Michael  Kaplan, Pat  Milton, Jennifer  Jacobs, Joe  Walsh",
// "title": "Charlie Kirk murder suspect appeared to confess to killing on Discord, company says - CBS News",
// "description": "\"It was me,\" a Discord account belonging to accused Charlie Kirk shooter Tyler Robinson appeared to state just hours before he was taken into custody, according to a company spokesperson.",
// "url": "https://www.cbsnews.com/news/charlie-kirk-suspect-discord-messages/",
// "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/09/15/104f850d-fd90-4c79-bff0-8d02eae69009/thumbnail/1200x630/75fa4099ce768cca5b9cc6b60ce6ca70/gettyimages-2234976697.jpg",
// "publishedAt": "2025-09-16T02:53:00Z",
// "content": "Just hours before Tyler Robinson was arrested for allegedly killing conservative activist Charlie Kirk, the 22-year-old appeared to take responsibility for the shooting in a message to friends on the… [+3374 chars]"
// },
// {
// "source": {
// "id": "the-hill",
// "name": "The Hill"
// },
// "author": "Tara Suter",
// "title": "Poland ‘neutralized a drone operating over government buildings’: Polish prime minister - The Hill",
// "description": "Polish Prime Minister Donald Tusk said Monday that his country “neutralized a drone operating over government buildings,” less than a week after he said that his country downed multiple Russian drones that breached Poland’s airspace. “Just now, the State Prot…",
// "url": "https://thehill.com/policy/defense/5504975-poland-neutralizes-drone-government/",
// "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/03/tusk_donald_poland_whitehouse_03122024_AP_AP24072775011828.jpg?w=1280",
// "publishedAt": "2025-09-16T02:53:00Z",
// "content": "Skip to content\r\nPolish Prime Minister Donald Tusk said Monday that his country “neutralized a drone operating over government buildings,” less than a week after he said that his country downed multi… [+1673 chars]"
// },
// {
// "source": {
// "id": "the-hill",
// "name": "The Hill"
// },
// "author": "Elvia Limon",
// "title": "Trump says he would’ve lowered flags for slain Minnesota Democrat, but governor ‘didn’t ask’ - The Hill",
// "description": "President Trump on Monday defended not ordering U.S. flags lowered to half-staff after the assassination of a Minnesota Democratic state lawmaker this summer, saying the governor did not ask. The president’s remark came during an unrelated Oval Office event o…",
// "url": "https://thehill.com/homenews/5504972-trump-defends-flag-decision-minnesota-democratic-lawmaker/",
// "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2025/09/AP25254758922062-e1757766690247.jpg?w=1280",
// "publishedAt": "2025-09-16T02:27:00Z",
// "content": "Skip to content\r\nPresident Trump on Monday defended not ordering U.S. flags lowered to half-staff after the assassination of a Minnesota Democratic state lawmaker this summer, saying the governor did… [+2209 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NBCSports.com"
// },
// "author": "Charean Williams",
// "title": "Monday Night Football: Baker Mayfield leads Bucs to 20-19 comeback - NBC Sports",
// "description": "Tampa Bay running back Rachaad White scored on a 2-yard run with six seconds left.",
// "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/monday-night-football-baker-mayfield-leads-bucs-to-20-19-comeback",
// "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/15eb94e/2147483647/strip/true/crop/6000x3375+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F86%2Fb6%2F4c3f68894eff96bcc0694ccdda55%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2235656669",
// "publishedAt": "2025-09-16T02:15:12Z",
// "content": "Baker Mayfield, playing with what appeared to be an injured left leg, willed the Buccaneers to a come-from behind 20-19 victory over the Texans on Monday night.\r\nThe Bucs did what they do, starting 2… [+2262 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Variety"
// },
// "author": "Joe Otterson",
// "title": "Terence Crawford vs. Canelo Alvarez Draws 41.4 Million Viewers on Netflix - variety.com",
// "description": "Terence Crawford's victory over Saúl “Canelo” Álvarez pulled in a sizable audience on Netflix.",
// "url": "https://variety.com/2025/tv/news/terence-crawford-vs-canelo-alvarez-netflix-viewers-1236519855/",
// "urlToImage": "https://variety.com/wp-content/uploads/2025/09/Canelo-vs-Crawford-netflix.jpg?w=1000&h=563&crop=1",
// "publishedAt": "2025-09-15T22:48:00Z",
// "content": "Terence Crawford’s victory over Saúl “Canelo” Álvarez pulled in a sizable audience on Netflix. \r\nThe bout, which took place at Allegiant Stadium in Nevada on Sept. 13, drew an average minute audience… [+1441 chars]"
// }
// ];
//use this articles array to display news in your NewsItem component
  constructor(){
    super();
    console.log("Hello I am a constructor from NewsItem");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
  }
  }

  async componentDidMount(){
    console.log("cdm");
     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=691ae3a452b043a2b9d10ae52d8ef9c7&page=1&pageSize=20";
     let data = await fetch(url);
     let parsedData = await data.json()
     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults}) // it will update the articles in state with the articles from parsedData
    }
// url->  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API
// then data -> await fetch(url); fetch is a inbuilt function which return a promise 
// then parsedData -> await data.json() json() is also a inbuilt function which return a promise
// then console.log(parsedData) -> it will print the data in json format

 handlePrevClick = async()=>{
  console.log("Previous");
  if(this.state.page <= 1){
    return;
  }
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=691ae3a452b043a2b9d10ae52d8ef9c7&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
  })
}

 handleNextClick = async()=>{
  if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
    return;
  }
  else{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=691ae3a452b043a2b9d10ae52d8ef9c7&page=${this.state.page + 1}&pageSize=20`;
     let data = await fetch(url);
     let parsedData = await data.json()
     this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles
  })
}
}

  render() {
    return (
      <div className="container my-3">
        <h2>News - Top Headlines</h2>
        <div className="row">
           {this.state.articles.map((element)=>{
            return <div className="col-md-3" key = {element.url}>
            <NewsItem  title = {element.title ? element.title.slice(0, 45): ""} description = {element.description ? element.description.slice(0, 88): ""} 
            imageurl = {element.urlToImage ? element.urlToImage: "https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg"} newsUrl = {element.url}/>
          </div>
           }) }
        </div>
         <div className="container d-flex justify-content-between">
           <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
           <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr;</button>
        </div>
      </div>
    );
  }
}
