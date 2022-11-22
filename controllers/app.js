const Airtable = require('airtable');
const client = require('@sendgrid/client');
const sgMail = require('@sendgrid/mail');
var base = new Airtable({ apiKey: 'keyGVZZhsH1mmc4zp' }).base('appuyJANV7usPxQeR');
var base2 = new Airtable({ apiKey: 'keyGVZZhsH1mmc4zp' }).base('appF2TvaaKaT3mt2P');
const { SENDGRID_API } = require('../utils/constants');
sgMail.setApiKey(SENDGRID_API);
client.setApiKey(SENDGRID_API)
client.setDefaultRequest({ baseUrl: 'https://api.sendgrid.com/' });

const getAll = (req, res) => {
  const data = [];
  base('Apps').select({
    view: 'Grid view'
  }).eachPage((records, fetchNextPage) => {
    records.forEach(function (record) {
      data.push(record)
    });
    fetchNextPage()
  }, (err) => {
    if (err) {
      res.json(err)
      return;
    };
    res.json(data)
  })
}

const getAllGroups = (req, res) => {
  const data = [];
  base('Group').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      data.push(record)
    });
    fetchNextPage();
  }, function done(err) {
    if (err) {
      res.json(err);
      console.error(err); return;
    }
    res.json(data)
  });
}

const getAllCategories = (req, res) => {
  const data = [];
  base('Categories').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {

    records.forEach(function (record) {
      data.push(record)
    });
    fetchNextPage();

  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.json(data)
  });
}

const getAllFunctions = (req, res) => {
  const data = [];
  base('Functions').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      data.push(record)
    });
    fetchNextPage();
  }, function done(err) {
    if (err) {
      console.error(err)
      return
    }
    res.json(data);
  })
}

const getAllFeatured = (req, res) => {
  const data = []
  base('Featured').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {

    records.forEach(function (record) {
      data.push(record)
    });
    fetchNextPage();

  }, function done(err) {
    if (err) { console.error(err); return; }
    res.json(data);
  });
}

const getSearchByText = (req, res) => {
  const body = req.body
  let data = [];
  base('Apps').select({
    view: 'Grid view'
  }).eachPage((records, fetchNextPage) => {

    // const searchResults = records.filter(record => {
    //     return record.get('Name').toLowerCase().includes(body.search);
    // });
    records.forEach(record => {
      if (record.get('Name').toLowerCase().includes(body.search)) {
        data.push(record);
      }
    })
    // res.json(searchResults)
    fetchNextPage()
  }, (err) => {
    if (err) console.error(err);
    res.json(data);
  })
}

const getSearchById = (req, res) => {
  const body = req.body
  base('Apps').find(body.id, function (err, record) {
    if (err) { console.error(err); return; }
    res.json(record);
  });
}

const getGroupsById = (req, res) => {
  const body = req.body;
  base('Group').find(body.id, function (err, record) {
    if (err) { console.error(err); return; }
    res.json(record);
  });
}

const getCategoryById = (req, res) => {
  const body = req.body;
  base('Categories').find(body.id, function (err, record) {
    if (err) { console.error(err); return; }
    res.json(record)
  });
}

const getFunctionById = (req, res) => {
  const body = req.body;
  base('Functions').find(body.id, function (err, record) {
    if (err) { console.error(err); return; }
    res.json(record)
  });
}

const getFeaturedById = (req, res) => {
  const body = req.body;
  base('Featured').find(body.id, function (err, record) {
    if (err) { console.error(err); return; }
    res.json(record);
  });
}


// Sample Body
// {
//     "fields": {
//       "Name": "Get files from S3 bucket",
//       "Built By": "naas",
//       "Built By ICON": [
//         {
//           "url": "https://dl.airtable.com/.attachments/b565609cdff212cf2a700425aab2d748/d8653223/naas.png"
//         }
//       ],
//       "Pricing": "Free",
//       "Pricing ICON": [
//         {
//           "url": "https://dl.airtable.com/.attachments/772e709e7261b1153679002305b34093/ac3fa23f/free.png"
//         }
//       ],
//       "Link to Learn More": "https://github.com/jupyter-naas/awesome-notebooks/blob/master/AWS/AWS_Get_files_from_S3_bucket.ipynb",
//       "Categories": [
//         "recxQolzUinYiDpby"
//       ],
//       "Functions": [
//         "rec8bxFPhIg0dTIvE"
//       ],
//       "Group": [
//         "reccyhWEUXRoFH1EO"
//       ]
//     }
//   }
const createApp = (req, res) => {
  const body = req.body
  base('Apps').create([body], (err, records) => {
    if (err) console.error(err);
    records.forEach(function (record) {
      res.json(record)
    });
  })
}

const deleteApp = (req, res) => {
  const body = req.body;

  base('Apps').destroy([body.id], function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    res.status(200);
  });
}

const addToSuggestionList = async (req, res) => {
  const { firstName, lastName, email, githubUrl, appName, appDesc } = req.body

  base2('App_Suggestion').create([
    {
      "fields": {
        "FIRST_NAME": firstName,
        "LAST_NAME": lastName,
        "EMAILID": email,
        "LINK_TO_GIT": githubUrl,
        "APP_NAME": appName,
        "APP_DESCRIPTION": appDesc
      }
    }
  ], function (err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}

const addToFeedbackList = async (req, res) => {
  const { user, feedback, name } = req.body

  base2('App_Feedback').create([
    {
      "fields": {
        "FIRST_NAME": user.firstName,
        "LAST_NAME": user.lastName,
        "EMAILID": user.email,
        "APP_GIT_LINK": "",
        "APP_NAME": name,
        "FEEDBACK": feedback
      }
    }
  ], function (err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}

const sendMailToAppsSuggest = async (req, res) => {
  const { toSend, firstName, appName, githubUrl } = req.body
  console.log(firstName, toSend)
  const msg = {
    to: `${toSend}`,
    from: 'support@katonic.ai',
    subject: "Thanks for App Suggestions",
    templateId: "d-c1440cae3b9c45cbbc2ce47c140da105",
    dynamic_template_data: {
      "firstName": firstName,
      "appName": appName,
      "githubUrl": githubUrl
    }
  };
  sgMail
    .send(msg)
    .then(() => {
      res.json({
        "status": 202
      })
    }, error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    });
}

const sendMailForFeedback = async (req, res) => {
  const { toSend, firstName, feedback } = req.body
  console.log(firstName, toSend, feedback)
  const msg = {
    to: `${toSend}`,
    from: 'support@katonic.ai',
    subject: "Thanks for your feedback",
    templateId: "d-c1440cae3b9c45cbbc2ce47c140da105",
    dynamic_template_data: {
      "firstName": firstName,
      "feedback": feedback
    }
  };
  sgMail
    .send(msg)
    .then(() => {
      res.json({
        "status": 202
      })
    }, error => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    });
}



module.exports = {
  getAll,
  getAllFunctions,
  getSearchByText,
  getSearchById,
  createApp,
  deleteApp,
  getAllGroups,
  getGroupsById,
  getAllCategories,
  getCategoryById,
  getFunctionById,
  getAllFeatured,
  getFeaturedById,
  addToSuggestionList,
  sendMailToAppsSuggest,
  addToFeedbackList,
  sendMailForFeedback
}