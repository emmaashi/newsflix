const articlesByTopic = [
  {
    id: 1,
    topic: "Kamala Harris fields VP candidates for upcoming election",
    articles: [
      {
        id: 1,
        sourceUrl:
          "https://www.ctvnews.ca/world/kamala-harris-is-interviewing-six-potential-vice-president-picks-this-weekend-ap-sources-say-1.6987909",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/8/2/kamala-harris-1-6987935-1722636470833.jpg",
        source: "CTV",
        title: "Kamala Harris Interviews VP Candidates",
      },
      {
        id: 2,
        sourceUrl:
          "https://www.cbsnews.com/news/dnc-virtual-roll-call-2024-kamala-harris/",
        imageUrl:
          "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/31/5007b1a9-74f1-4f25-b244-06161d94f1db/thumbnail/1280x720/c691c3e4714975d4873e6e221f6427d9/cbsn-fusion-diving-into-harris-campaign-historic-fundraising-haul-thumbnail.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
        title: "Harris Formally Nominated For President",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.cnn.com/2024/08/03/politics/harris-vp-vetting-team-finalists/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2164089457.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
        title: "Harris's VP Vetting Team Finalists",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.ctvnews.ca/world/what-polling-shows-about-the-top-vp-contenders-for-kamala-harris-1.6985551",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/8/1/kamala-harris-vp-nominee-contenders-1-6985554-1722518524148.jpg",
        source: "CTV",
        title: "Polling Insights On VP Contenders",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.cnn.com/2024/08/03/politics/kamala-harris-vice-president-decision/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/2024-07-30t181627z-1480954929-rc2t59as8sy2-rtrmadp-3-usa-election-harris.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
        title: "Final Days Of VP Decision",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.cbsnews.com/news/kamala-harris-top-contenders-vice-president-decision/",
        imageUrl:
          "https://assets2.cbsnewsstatic.com/hub/i/r/2024/07/31/913ff33b-89c1-4ad3-8874-904502fbcefa/thumbnail/1280x720/deb5d393bd883bd7a8035156d3225fd1/cbsn-fusion-kamala-harris-to-campaign-with-yet-to-be-named-running-mate-next-week-thumbnail.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
        title: "Harris Focusing On Final Contenders",
      },
    ],
  },
  {
    id: 2,
    topic: "Dispute surrounding Olympics gender eligibility",
    articles: [
      {
        id: 1,
        sourceUrl:
          "https://www.cnn.com/2024/06/12/sport/lia-thomas-world-aquatics-transgender-swimmer/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/ap22355759453646.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
        title: "Lia Thomas Challenges Swimming Rules",
      },
      {
        id: 2,
        sourceUrl:
          "https://www.foxnews.com/media/boxing-champion-angered-olympic-gender-controversy-definitely-dropped-ball",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1440/810/Angela-Carini2.jpg?ve=1&tl=1",
        source: "FOX",
        title: "Boxing Champion Criticizes Olympic Rules",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.foxnews.com/media/amid-olympics-gender-controversy-americans-weigh-whether-biological-males-compete-against-women",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1440/810/Imane-Khelf8.jpg?ve=1&tl=1",
        source: "FOX",
        title: "Americans Debate Gender Eligibility Rules",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.cbssports.com/olympics/news/2024-olympics-boxing-angela-carini-concedes-bout-with-imane-khelif-after-46-seconds-reigniting-gender-debate/",
        imageUrl:
          "https://sportshub.cbsistatic.com/i/r/2024/08/01/97a956de-eb5e-4994-aa5a-b6fca535136b/thumbnail/770x433/9011eebdaf6084cffd3cd2485bc2eda2/imane-khelif-boxing.jpg",
        source: "CBS",
        title: "Olympic Boxing Match Sparks Debate",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.ctvnews.ca/lifestyle/paris-olympics-set-record-for-number-of-openly-lgbtq2s-athletes-but-some-say-progress-far-from-finished-1.6982233",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/29/paris-2024-olympics-lgbtq2s--1-6982244-1722298162768.jpg",
        source: "CTV",
        title: "Paris Olympics Sets LGBTQ2S Record",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.ctvnews.ca/world/drag-queen-in-olympic-opening-ceremony-has-no-regrets-calls-it-a-photograph-of-france-in-2024-1.6984542",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/31/hugo-bardin-paris-olympics-drag-performer-1-6984545-1722449286530.jpg",
        source: "CTV",
        title: "Drag Queen Performs In Olympics",
      },
    ],
  },
  {
    id: 3,
    topic: "The ongoing Israel-Palestine conflict",
    articles: [
      {
        id: 1,
        sourceUrl:
          "https://www.nbcnews.com/politics/donald-trump/trump-israel-gaza-finish-problem-rcna141905",
        imageUrl:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/rockcms/2024-03/240305-donald-trump-ew-205p-31c5ff.jpg",
        source: "NBC",
        title: "Trump Proposes Solution To Conflict",
      },
      {
        id: 2,
        sourceUrl:
          "https://www.foxnews.com/world/turkeys-erdogan-threatens-to-invade-israel-over-war-in-gaza-regional-tensions-grow",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/05/1440/810/netanyahu-erdogan.jpg?ve=1&tl=1",
        source: "FOX",
        title: "Erdogan Threatens Israel with Invasion Over Gaza Conflict",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.cnn.com/2024/08/01/middleeast/israeli-soldier-alleges-serious-misconduct-gaza-intl/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/still-20826543-693-9530000000001-still.jpg?q=w_1110,c_fill/f_webp",
        source: "CNN",
        title: "Israeli Soldier Alleges Misconduct in Gaza",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.ctvnews.ca/world/israel-kills-militants-in-the-west-bank-as-a-nervous-region-watches-latest-on-cease-fire-talks-1.6988332",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/8/3/west-bank-airstrike-aftermath-1-6988333-1722683789242.jpg",
        source: "CTV",
        title: "Israel Kills Militants in West Bank Amid Cease-Fire Talks",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.cbsnews.com/news/israel-hamas-war-idf-palestinian-prisoner-alleged-rape-sde-teinman-abuse-protest/",
        imageUrl:
          "https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/30/ced1e569-adfb-4ccd-9dc9-9b372b091f30/thumbnail/1240x828/10985d8ee8668ddab97f90c9a4e216d2/israel-prison-abuse-protest-2163814776.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
        title: "Allegations of Abuse by Israeli Soldiers Spark Protests",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.cnn.com/2024/07/27/middleeast/israel-gaza-war-palestinians-personal-objects-identity-cmd-intl/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/20240719-gaza-personal-objects-1.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
        title: "Gaza War: Highlighting Palestinian Struggles",
      },
      {
        id: 7,
        sourceUrl:
          "https://www.cbsnews.com/news/hamas-leader-ismail-haniyeh-assassinated-tehran-iran-says/",
        imageUrl:
          "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/31/0682ba3c-26b8-4c28-aac1-4107336827b5/thumbnail/1280x720/a6427ddbb2c0b11492a7dfd7e9bd4f6f/0731-en-patta.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
        title: "Hamas Leader Ismail Haniyeh Assassinated",
      },
    ],
  },
];

export default articlesByTopic;
