# Formative Part1

## Student Information
* **Full Name:** Sade' September 
* **Student Number:** ST10508789
* **Course Code:** WEDE5020
* **Module:** Web Development (POE)

---

## Project Overview
[Provide a comprehensive summary of the project, including its purpose, scope, and target audience.]

---

## Website Goals and Objectives
Website Goals and Objectives
Goal 1: Give the business a professional online presence so it can reach a wider customer base.
Objective A: Show all services clearly on one Services page, with a description of each.
Objective B: Make enquiries and bookings simple through an enquiry form that works on desktop, tablet and mobile.


## Key Features and Functionality
Key Features and Functionality
Multi-page website: Home, About, Enquiry, Services and Contact pages, linked by one navigation menu.
Enquiry form: Collects name, email, telephone number and the customer's enquiry, with submit and clear buttons.
Responsive design: The layout changes for desktop, tablet and mobile screens


---

## Timeline and Milestones
* **Milestone 1:** [Phase / Task Name] – *Target Date:* [YYYY-MM-DD]
* **Milestone 2:** [Phase / Task Name] – *Target Date:* [YYYY-MM-DD]
* **Milestone 3:** [Phase / Task Name] – *Target Date:* [YYYY-MM-DD]

---

## Part 1 Details
*[Note: Part 2 and Part 3 details will be added in future submissions/edits.]*

* **Overview of Part 1:** [Provide specific details required for the Part 1 submission]
Project Overview
Precision Tailored & Alterations is a small tailoring business established in 2021. It offers clothing alterations, custom tailoring, garment repairs and fit adjustments. This website lets customers learn about the business, see the services offered, meet the team, and send an enquiry or book an alteration online. The target audience is students, professionals and members of the local community who need affordable, high-quality tailoring.
* **Implementation Highlights:** [Key technologies, layout decisions, or styling used in Part 1]
Part 2 Details
Overview of Part 2: Styled the whole website with one external stylesheet (CSS/style.css) linked to every page, and made the site responsive.
Implementation Highlights:
CSS reset and base styles for font family, font size, colours and spacing.
Typography: Georgia headings and Arial body text, sizes in rem, line-height and letter-spacing.
Layout: CSS Grid for the cards on the About and Services pages, Flexbox for the navigation menu.
Visual styles: navy, cream and gold colour scheme, borders and box-shadows.
Interactive styles: :hover, :focus and :active on links, buttons and form fields.
Responsive design: media queries at 900px (tablet) and 600px (mobile). Cards go from 3 columns to 2 to 1, headings get smaller and the menu stacks vertically.
Responsive images: max-width: 100% and height: auto.
Changelog
Part 2 - Feedback edits from Part 1
Added this changelog section (it was missing in Part 1).
Filled in the README sections that only had template text (project overview, goals, features, details).
Corrected the page titles in about.html (AbuutPage) and enquiry.html (EnquiryPage).
Changed the class name from-group to form-group in enquiry.html.
Fixed the broken image tag in service.html (missing closing quote).
Moved the footer in index.html so it is no longer inside the content area.
Put the cards inside their grid-container divs on about.html and service.html.
Removed fixed height and width attributes from images so the CSS can size them.
Part 2 - New features
Created the external stylesheet CSS/style.css and linked it to all pages.
Added the CSS reset and base styles.
Added typography styles.
Added the grid and flexbox layouts.
Added colours, borders and box-shadows.
Added :hover, :focus and :active styles.
Added media queries for tablet and mobile.
Made images responsive.
Tested in browser developer tools and added screenshots.

---

## Sitemap
## Part 3:Details 
Added JavaScript functionality and search engine optimisation(SEO) to the Precision Tailored & Alterations Website, and deployed it on a free platform.The website now has a searchable price list, an FAQ accordin, an image gallery with a lightbox, validation form and an interactive map and SEO tags, files and content on every page. 
The price list is loaded with JavaScript from a list of services, with search and sort.
The interactive elements are in FAQ accordin, gallery with lightbox, Leaflet map, CSS animations and transitions.
With the Enquiry forms i added vaildations and an estimated cost and ready date, contact form with vildations that complies the details into an to the business.
SEO: titles, meta descriptions and keywords, heading order, image names 



Changelog
fixed enquiry page as well as the service page, with the service page I added a frequently asked questions thought it would fit perfect 

Part3 : New Things i added 
Added <script src="js/script.js"></script>
before the closing of the <body> tags so the javascript runs on every page.
Added titles, meta descriptions and meta keywords to the head of every page SEO.
Added social media buttons (Facebook, Instagram and Twitter/X) to the footer. They open in a new tab.
Updated CSS/style.css with the Part 3 styles (see below).
index.html
Changed the heading Ready for the Perfect Fit? from h3 to h2 and Book Your Alteration from h4 to h3 so the heading order is correct.
Added the suburb or town to the page text for local SEO.
about.html
Changed Meet Our Team members to an h2 heading and corrected the page title.
Added internal links inside the text to the Services and Enquiry pages.
service.html
Added a price list section loaded with JavaScript from a list of services (name, description, price and days to complete).
Added a search bar that filters the services as the user types, and a drop-down that sorts by price (low to high and high to low) and name (A to Z). A message shows when no service matches.
Added an FAQ accordion: clicking a question shows or hides the answer.
Added a gallery with a lightbox: clicking an image shows it larger, and clicking again closes it.
Fixed the broken image tag (missing closing quote) and renamed images with descriptive file names.
enquiry.html
Rebuilt the form with a service drop-down (filled by JavaScript), number of items, drop-off date and enquiry message.
Added JavaScript validation: name length, email format, a 10-digit phone number, a chosen service, 1 to 20 items, a future drop-off date and a message of at least 10 characters. Error messages show above the buttons.
After validation the page calculates and shows the estimated cost, and the date the garment should be ready, based on the service chosen.
The form action points to a form service and the data is sent in the background with AJAX (fetch), so the page does not reload.
Fixed the duplicate id="enquiry" (used by both main and the textarea) and the mismatch between the telephone label and input ids.
Fixed the class name typo from-group to form-group.
contact.html
Rebuilt the form with name, email, telephone, type of message and message fields.
Added JavaScript validation. When the details are valid they are compiled into an email addressed to the business email in the form action, and the form is cleared.
Replaced the embedded map with an interactive Leaflet map (OpenStreetMap) with a marker and popup, so the map and the email table no longer overlap.
Added the business address, phone number and suburb for local SEO.
js/script.js (new file)
Created functions for the price list search and sort, accordion, lightbox, enquiry validation, contact validation and the map.
CSS/style.css
Added styles for the search bar and service cards, accordion, gallery and lightbox, form errors and responses, drop-down lists, the map, the email table, and the social media buttons.
Added animations and transitions: cards fade in when the page loads, and gallery images zoom slightly on hover.
Added tablet and mobile media queries for the new sections (gallery columns, search bar and map height).
SEO files
Created robots.txt to tell search engine crawlers they may read the pages and where the sitemap is.
Created sitemap.xml listing all five pages.
Resized images to improve page speed.
GitHub
[GitHub Pages / Netlify]: [paste your link here].
Search Engine Optimisation (SEO)
On-page SEO
Keyword research: Keywords such as "clothing alterations", "custom tailoring", "suit alterations" and "garment repairs" were chosen because they are phrases customers would search for. They are used in the headings, page text and meta keywords.
Title tags and meta descriptions: Every page has its own title and meta description.
Header tags: Each page has one h1 followed by h2 and h3 headings in order.
Image optimisation: Images have descriptive file names and alt text, and were resized to load faster.
URL structure: Page names are short, lowercase and descriptive (for example service.html).
Internal linking: The navigation menu links all pages and extra links were added inside the page text.
Mobile-friendliness: The viewport meta tag and CSS media queries make the site work on tablets and phones.

