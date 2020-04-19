const DISPERSE_COURSE_URI = "https://learn.urfu.ru/subject/list/disperse/subject_id/"

const MENU_ELEMENT_ID = "page-context-accordion";
const COURSE_ID_REGEX = /(\d+\/*)$/
const NAVIGATION_CLASS = "navigation";
const REMOVE = "Отписаться от курса";

var menu = document.getElementById(MENU_ELEMENT_ID);
if (menu !== null) {
    var linkText = document.createTextNode(REMOVE);

    var linkElement = document.createElement("a");
    linkElement.href = createLink();
    linkElement.appendChild(linkText);

    var appended = document.createElement("li");
    appended.appendChild(linkElement);

    var anchor = ((((document.getElementsByClassName(NAVIGATION_CLASS)[0])["childNodes"])[1])["childNodes"])[1];
    anchor.appendChild(appended);
}

function createLink() {
    var typical_element = document.getElementById("logo");
    if (typical_element !== null) {
        var matchesOnBaseLink = typical_element.baseURI.match(COURSE_ID_REGEX)
        if (matchesOnBaseLink.length !== 0) {
            return DISPERSE_COURSE_URI + matchesOnBaseLink[0];
        }
    }

    return DISPERSE_COURSE_URI + "1";
}
