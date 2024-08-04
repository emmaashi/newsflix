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
      },
      {
        id: 2,
        sourceUrl:
          "https://www.cbsnews.com/news/dnc-virtual-roll-call-2024-kamala-harris/",
        imageUrl:
          "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/31/5007b1a9-74f1-4f25-b244-06161d94f1db/thumbnail/1280x720/c691c3e4714975d4873e6e221f6427d9/cbsn-fusion-diving-into-harris-campaign-historic-fundraising-haul-thumbnail.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.foxbusiness.com/politics/kamala-harris-vp-clear-favorite-emerges-betting-markets",
        imageUrl:
          "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/bc3427cc-279e-48e7-b3e2-29780be126c4/dd9bf6cb-f35e-4b0a-a5aa-e46ce225a9dc/1280x720/match/896/504/image.jpg?ve=1&tl=1",
        source: "FOX",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.cnn.com/2024/08/03/politics/harris-vp-vetting-team-finalists/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2164089457.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.ctvnews.ca/world/what-polling-shows-about-the-top-vp-contenders-for-kamala-harris-1.6985551",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/8/1/kamala-harris-vp-nominee-contenders-1-6985554-1722518524148.jpg",
        source: "CTV",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.cnn.com/2024/08/03/politics/kamala-harris-vice-president-decision/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/2024-07-30t181627z-1480954929-rc2t59as8sy2-rtrmadp-3-usa-election-harris.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
      },
      {
        id: 7,
        sourceUrl:
          "https://www.cbsnews.com/news/kamala-harris-top-contenders-vice-president-decision/",
        imageUrl:
          "https://assets2.cbsnewsstatic.com/hub/i/r/2024/07/31/913ff33b-89c1-4ad3-8874-904502fbcefa/thumbnail/1280x720/deb5d393bd883bd7a8035156d3225fd1/cbsn-fusion-kamala-harris-to-campaign-with-yet-to-be-named-running-mate-next-week-thumbnail.jpg?v=d7dedd293aad546f97f947149642d369",
        source: "CBS",
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
      },
      {
        id: 2,
        sourceUrl:
          "https://www.foxnews.com/media/boxing-champion-angered-olympic-gender-controversy-definitely-dropped-ball",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1440/810/Angela-Carini2.jpg?ve=1&tl=1",
        source: "FOX",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.foxnews.com/media/amid-olympics-gender-controversy-americans-weigh-whether-biological-males-compete-against-women",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1440/810/Imane-Khelf8.jpg?ve=1&tl=1",
        source: "FOX",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.cbssports.com/olympics/news/2024-olympics-boxing-angela-carini-concedes-bout-with-imane-khelif-after-46-seconds-reigniting-gender-debate/",
        imageUrl:
          "https://sportshub.cbsistatic.com/i/r/2024/08/01/97a956de-eb5e-4994-aa5a-b6fca535136b/thumbnail/770x433/9011eebdaf6084cffd3cd2485bc2eda2/imane-khelif-boxing.jpg",
        source: "CBS",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.ctvnews.ca/lifestyle/paris-olympics-set-record-for-number-of-openly-lgbtq2s-athletes-but-some-say-progress-far-from-finished-1.6982233",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/29/paris-2024-olympics-lgbtq2s--1-6982244-1722298162768.jpg",
        source: "CTV",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.ctvnews.ca/world/drag-queen-in-olympic-opening-ceremony-has-no-regrets-calls-it-a-photograph-of-france-in-2024-1.6984542",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/31/hugo-bardin-paris-olympics-drag-performer-1-6984545-1722449286530.jpg",
        source: "CTV",
      },
    ],
  },
  {
    id: 3,
    topic: "Dispute surrounding Olympics gender eligibility",
    articles: [
      {
        id: 1,
        sourceUrl:
          "https://www.cnn.com/2024/06/12/sport/lia-thomas-world-aquatics-transgender-swimmer/index.html",
        imageUrl:
          "https://media.cnn.com/api/v1/images/stellar/prod/ap22355759453646.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        source: "CNN",
      },
      {
        id: 2,
        sourceUrl:
          "https://www.foxnews.com/media/boxing-champion-angered-olympic-gender-controversy-definitely-dropped-ball",
        imageUrl:
          "https://www.foxnews.com/media/boxing-champion-angered-olympic-gender-controversy-definitely-dropped-ball",
        source: "FOX",
      },
      {
        id: 3,
        sourceUrl:
          "https://www.foxnews.com/media/amid-olympics-gender-controversy-americans-weigh-whether-biological-males-compete-against-women",
        imageUrl:
          "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/1440/810/Imane-Khelf8.jpg",
        source: "FOX",
      },
      {
        id: 4,
        sourceUrl:
          "https://www.cbssports.com/olympics/news/2024-olympics-boxing-angela-carini-concedes-bout-with-imane-khelif-after-46-seconds-reigniting-gender-debate/",
        imageUrl:
          "https://sportshub.cbsistatic.com/i/r/2024/08/01/97a956de-eb5e-4994-aa5a-b6fca535136b/thumbnail/770x433/9011eebdaf6084cffd3cd2485bc2eda2/imane-khelif-boxing.jpg",
        source: "CBS",
      },
      {
        id: 5,
        sourceUrl:
          "https://www.ctvnews.ca/lifestyle/paris-olympics-set-record-for-number-of-openly-lgbtq2s-athletes-but-some-say-progress-far-from-finished-1.6982233",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/29/paris-2024-olympics-lgbtq2s--1-6982244-1722298162768.jpg",
        source: "CTV",
      },
      {
        id: 6,
        sourceUrl:
          "https://www.ctvnews.ca/world/drag-queen-in-olympic-opening-ceremony-has-no-regrets-calls-it-a-photograph-of-france-in-2024-1.6984542",
        imageUrl:
          "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2024/7/31/hugo-bardin-paris-olympics-drag-performer-1-6984545-1722449286530.jpg",
        source: "CTV",
      },
    ],
  },
];

export default articlesByTopic;
