var listContents = [{
  key: "food",
  list: "1. Food",
  titleHeader: {
    firstTopic: function firstTopic() {
      var h1 = "<h1 style=\"font-family: Roboto;\n            font-style: normal;\n            font-weight: bold;\n            font-size: 40px;\n            margin-bottom:20px;\n            line-height: 52px;\">Are you feeding your puppy the right food?</h1>";
      return h1;
    } //firstTopic

  },
  //titleHeader
  topic1: "Not all dog food is equal",
  lp1: "As a devoted puppy parent, we know you want to do the best for your newest fur family addition, but navigating the world of dog food can be tricky. With every pack on the shelf promising you a shiny, happy, healthy puppy, how can you decide which food is truly best for your pup?",
  lp2: "The vast majority of puppy food sold in Australia will meet your pup's minimal nutritional requirements as set out by industry bodies like AAFCO or FEDIAF; but just like a passing score could range from a C- to an A.",
  leftImage: "<img alt=\"White Dog Running\" src=\"https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/puppy-nudge-white-dog.png\"></img>",
  topic2: "So what makes an A+ food?",
  lp3: "<ul><li>Be tailored to your pet's life stage and size (Because what suits a 6kg Chihuahua might not suit a 60kg Great Dane).</li><li>Have undergone digestibility testing so you know that the nutrients in the food are actually digested and absorbed by the body.</li><li>Offer proven benefits, like optimal bone development, improved immunity, healthy skin and a shiny coat.</li></ul>",
  rightImage: "<img alt=\"White Dog Running\" src=\"https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/puppy-eating-food.png\"></img>",
  topic3: "Invest in long term health",
  rp1: "Premium quality foods are backed by decades of nutritional research and development which means their formulas are tailored to reduce the risk of some common health problems in adult dogs.",
  rp2: "<div class=\"grey\"><h3>Premium puppy foods can offer:</h3><br><ul><li>Optimal bone growth for <strong>healthier, stronger bones and joints for life.</strong></li><li>Improved brain function to support learning for <strong>reduced behavioural problems.</strong></li><li>A healthy body with plenty of lean muscle mass for <strong>reduced risk of obesity in later life.</strong></li><li>Nutrients to support and strengthen the immune system to <strong>help fight infectious illness.</strong></li></ul></div>",
  divider: "Feeding a high quality food is one simple thing you can do every day to invest in your dog's long term health. See our table below for a cost/day comparison - you might be surprised at how affordable a premium food can be!",
  tableContents: [{
    imageSrc: "<div style=\"height:200px;flex-basis:20%;\"></div>",
    q1: "Product",
    q2: "Ingredient Consistency Between Batches",
    q3: "Are batches tested to ensure consistent nutrient levels?",
    q4: "Are feeding trials performed to prove nutritional adequacy?",
    q5: "Digestibility Testing?",
    q6: "Added ingredients for gut health",
    q7: "Ingredients for skin health",
    q8: "pH and minerals balanced to reduce risk of bladder stones",
    q9: "Total Omega Fatty Acids^",
    q10: "Price *As of 17/10/19",
    q11: "Days Per Bag",
    q12: "Price *As of 17/10/19",
    q13: "Cost Per Day"
  }, {
    imageSrc: "<div style=\"height:200px;flex-basis:20%;\"><img alt=\"Brand on Supermarket\" src=\"https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/brand-on-supermarket.png\"></img></div>",
    q1: "Brand on Supermarket Shelf, 3kg",
    q2: "Vary depending on cost and availability.",
    q3: "n",
    q4: "n",
    q5: "Maybe",
    q6: "Beet pulp",
    q7: "<ul><li>Fish and fish by-products (tuna and/or salmon)</li></ul>",
    q8: "Maybe - depends on brand",
    q9: "1.6%",
    q10: "$15.99",
    q11: "24",
    q12: "$15.99",
    q13: "$0.68"
  }, {
    imageSrc: "<div style=\"height:200px;flex-basis:20%;\"><img alt=\"Royal Canin\" src=\"https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/royal-canin-mini-puppy-dry-dog-food.png\"></img></div>",
    q1: "Royal Canin Mini Puppy, 8kg",
    q2: "y",
    q3: "y",
    q4: "y",
    q5: "y",
    q6: "\n          <ul>\n            <li>Beet pulp</li>\n            <li>Prebiotics</li>\n            <li>Yeast extracts</li>\n            <li>Yucca extract</li>\n          </ul>\n        ",
    q7: "<ul><li>Fish Oil</li></ul>",
    q8: "y",
    q9: "4.7%",
    q10: "$83.43",
    q11: "75",
    q12: "$83.43",
    q13: "$1.11"
  }, {
    imageSrc: `<div style="height:200px;flex-basis:20%;"><img alt="Royal Canin" src="https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/hills-science-diet-puppy-small-bites-dry-dog-food.png"></img></div>`,
    q1: "Hill's Science Diet Puppy Small Bites 7.03kg",
    q2: "y",
    q3: `y`,
    q4: `y`,
    q5: `y`,
    q6: `<ul>
        <li>Beet pulp</li>
        <li>Fruits & vegetables</li>
        <li>Flaxseed</li>
      </ul>`,
    q7: `<ul><li>Fish Oil</li></ul>`,
    q8: "y",
    q9: "5.0%",
    q10: "$89.99",
    q11: "61",
    q12: "$89.99",
    q13: "$1.47"
  }, {
    imageSrc: `<div style="height:200px;flex-basis:20%;"><img alt="Royal Canin" src="https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/orijen-biologically-appropriate-puppy-dry-dog-food.png"></img></div>`,
    q1: "Orijen Puppy, 2kg",
    q2: "y",
    q3: "y",
    q4: "n",
    q5: "y",
    q6: `<ul>
        <li>Fruits & vegetables</li>
        <li>Chicory root</li>
        <li>Probiotics</li>
      </ul>`,
    q7: `<ul><li>Fruits &amp; vegetables</li></ul>`,
    q8: "y",
    q9: "4.9%",
    q10: "$54.95",
    q11: "18",
    q12: "$54.95",
    q13: "$2.99"
  }]
}, //FOOD
{
  key: "fnw",
  list: "2. Flea and Worming",
  titleHeader: {
    firstTopic: function () {
      let h1 = `<h1 style="font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            margin:20px 0;
            line-height: 52px;">Flea and worming</h1>`;
      return h1;
    }
  },
  lp1: "Fleas, ticks, heartworm and intestinal worms can cause very serious illnesses for your puppy; yet thankfully they are completely preventable.",
  lp2: `<div><h3>Flea and worming highlights here:</h3> <br /> <ul> <li>Fleas </li> <li> Ticks (in tick paralysis areas) </li> <li> Heartworm </li> <li> Intestinal worms </li> <li> Tapeworms (including hydatids) </li> </ul></div>`,
  rightImage: `<img alt="Small Brown Puppy" src="https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/small-brown-puppy.png"></img>`,
  zmiddle: `<div class="gx-row-flex-start gx-middle-container">
                    <h3>Product Comparison</h3>
                    <select class="gx-select"><option selected>Small Breed</option><option>Medium Breed</option><option>Large Breed</option> </select>
                    
                    </div>
                <div>
                </div>
                `
}, //FLEA AND WORMING
{
  key: "tnt",
  list: "3. Treats & Toys",
  titleHeader: {
    firstTopic: function () {
      let h1 = `<h1 style="font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 50px;
            line-height: 52px">What kind of treat is best for my puppy?</h1>`;
      return h1;
    }
  },
  lp1: "Treats will be an essential tool in teaching your puppy basic obedience and manners, so make sure you always have some on hand.",
  lp2: `<div><h3>A good puppy training treat should be:</h3> <br /> <ul> <li> Delicious! Make sure it's something extra special that your pup doesn't normally eat. </li> <li> Soft and easy to chew; baby teeth are not as strong as adult teeth, plus teething can make crunchy treats uncomfortable for some pups. </li> <li> Able to be broken into small pieces so that a little goes a long way. </li> </ul></div>`,
  rightImage: `<img alt="Doggy Pink" src="https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/doggy-pink.png"></img>`
}, //TOYS
{
  key: "grooming",
  list: "4. Grooming",
  titleHeader: {
    firstTopic: function () {
      let h1 = `<h1 style="font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 50px;
            line-height: 52px;">What do I need to groom my puppy?
            </h1>`;
      return h1;
    }
  },
  lp1: "Your puppy's grooming needs will vary depending on their breed and coat type.",
  lp2: `<div><h3>But as a minimum your kit should include:</h3> <br /> <ul> <li> <strong>A gentle puppy shampoo </strong>Give your pup a full bath every 1 to 2 weeks at the most; frequent bathing or harsh shampoos can strip the coat of natural oils. </li> <li> <strong>Pet wipes for spot clean ups </strong>These specially designed wipes are perfect for cleaning up muddy paws or messy faces between baths. </li> <li> <strong>Nail trimmers </strong>Get your pup used to having their nails trimmed regularly right from the start, ask your vet or groomer to show you how to trim them safely. </li> <li> <strong>Deshedding brush </strong>Dogs of all coat lengths can shed heavily at times, a deshedding brush means less of it ends up on your carpet and couch! </li> </ul></div>`,
  rightImage: `<img alt="Doggy Pink" src="https://storage.googleapis.com/petcircle-assets/images/puppy-nudge/doggy-freshy-ligo.png"></img>`
}];

var listContent = () => {
  let listNames = listContents.map(content => {
    let y = `<div class="guide-items guide-items-top">
                <div class="checklist-container">
                    <div class="checkbox-item">
                        <input type="checkbox" id="${content.key}Box" />
                        <label for="${content.key}Box"></label>
                    </div>
                </div>
                <h3>${content.list}</h3>
            </div>`;
    let left = `<div class="left-wrapper">
                    <div class="gx-left-content">
                        ${content.titleHeader ? content.titleHeader.firstTopic() : ""}
                        <div class="gx-inner-content">
                            <h3 style="font-family: Roboto;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 23px;">${content.topic1 ? content.topic1 : ""}</h3>
                            <p>${content.lp1 ? content.lp1 : ""}</p>
                            <p>${content.lp2 ? content.lp2 : ""}</p>
                        </div>
                        <div class="gx-inner-content">
                            ${content.leftImage ? content.leftImage : ""}
                        </div>
                        <div class="gx-inner-content">
                            <h3 style="font-family: Roboto;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 23px;">${content.topic2 ? content.topic2 : ""}</h3>
                            <div>${content.lp3 ? content.lp3 : ""}</div>
                        </div>
                    </div>
                </div>`;
    let right = `<div class="right-wrapper">
                    <div class="gx-right-content">
                        <div class="gx-inner-content">
                            ${content.rightImage ? content.rightImage : ""}
                            <h3 style="font-family: Roboto;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 23px;">${content.topic3 ? content.topic3 : ""}</h3>
                            <p>${content.rp1 ? content.rp1 : ""}</p>
                            <div>${content.rp2 ? content.rp2 : ""}</div>
                        </div>
                        
                    </div>
                </div>`;
    let zMiddle = `<div class="gx-row-flex-center">${content.zmiddle ? content.zmiddle : ""}</div>`;
    let items = content.tableContents ? content.tableContents.map(column => {
      var columnItems = `<div class="gx-col-flex gx-table-items">
                        <div>${column.imageSrc}</div>
                        <div>${column.q1}</div>
                        <div>${column.q2}</div>
                        <div>${column.q3}</div>
                        <div>${column.q4}</div>
                        <div>${column.q5}</div>
                        <div>${column.q6}</div>
                        <div>${column.q7}</div>
                        <div>${column.q8}</div>
                        <div>${column.q9}</div>
                        <div>${column.q10}</div>
                        <div>${column.q11}</div>
                        <div>${column.q12}</div>
                        <div>${column.q13}</div>
                    </div>`;
      return columnItems;
    }) : "";
    let tableList = `<div class="gx-table-list">${content.tableContents ? items.join("") : ""}</div>`; //`<img src="Group 216.png"></img>`;

    let container = `<li style="display:flex;flex-direction:column;justify-content:center;">
                ${y}
                <div class="content-wrapper" style="margin-top:20px;">
                    <div class="guide-content-wrap style=" display:flex;flex-direction:row;justify-content:flex-start;max-width: 960px;width:100%;">
                        ${left}${right}
                    </div> 
                </div>
                <div style="display:flex;flex-direction:row;justify-content:center;"><p style="width:100%;max-width:850px;padding:0 10px;">${content.divider ? content.divider : ""}</p>
                </div>
                ${zMiddle}
                <div class="gx-product gx-row-flex-center" style="margin:20px 0;">
                    ${tableList}
                </div>
            </li>`;
    return container;
  });
  return listNames.join("");
};

var domContainer = document.querySelector("#root");
domContainer.innerHTML = listContent();