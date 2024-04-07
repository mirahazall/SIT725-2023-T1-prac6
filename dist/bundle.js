/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/scripts.js":
/*!******************************!*\
  !*** ./public/js/scripts.js ***!
  \******************************/
/***/ (() => {

eval("const cardList = [\n    {\n        title: \"Arizona\",\n        image: \"images/horseshoebend.jpg\",\n        link: \"Horseshoe Bend\",\n        description: \"Horseshoe Bend\",\n    },\n    {\n        title: \"California\",\n        image: \"images/elcapitan.jpg\",\n        link: \"El Capitan Yosemite\",\n        description: \"El Capitan Yosemite\"\n    }\n];\n\nconst addCards = (items) => {\n    if (!Array.isArray(items)) {\n        console.error('Invalid input. Expected an array.');\n        return;\n    }\n    items.forEach(item => {\n        let itemToAppend = '<div class=\"col s4 center-align\">' +\n            '<div class=\"card medium\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=\"' + item.image + '\">' +\n            '</div><div class=\"card-content\">' +\n            '<span class=\"card-title activator grey-text text-darken-4\">' + item.title + '<i class=\"material-icons right\">more_vert</i></span><p><a href=\"#\">' + item.link + '</a></p></div>' +\n            '<div class=\"card-reveal\">' +\n            '<span class=\"card-title grey-text text-darken-4\">' + item.title + '<i class=\"material-icons right\">close</i></span>' +\n            '<p class=\"card-text\">' + item.description + '</p>' +\n            '</div></div></div>';\n        $(\"#card-section\").append(itemToAppend);\n    });\n};\n\nconst submitForm = () => {\n    let formData = {\n        // Extract form data as needed\n        first_name: $('#first_name').val(),\n        last_name: $('#last_name').val(),\n        password: $('#password').val(),\n        email: $('#email').val(),\n    };\n\n    // Send the form data to the server\n    $.ajax({\n        type: \"POST\",\n        url: \"/api/projects/submit-form\",\n        contentType: \"application/json\",\n        data: JSON.stringify(formData),\n        dataType: \"json\", \n        success: function (response) {\n            console.log(response);\n            // Handle success, if needed\n        },\n        error: function (error) {\n            console.error(error);\n            // Handle error, if needed\n        }\n    });\n};\n\n\nconst getProjects = () => {\n    $.get('/api/projects', (response) => {\n        if (response.statusCode == 200) {\n            addCards(response.data);\n        }\n    });\n};\n\n$(document).ready(function () {\n    const showMyModal = () => {\n        $('#modal1').modal('open');\n    };\n\n    $('#clickMeButton').click(() => {\n        showMyModal();\n    });\n\n    $('.materialboxed').materialbox();\n    $('#formSubmit').click(() => {\n        submitForm();\n    });\n\n    getProjects();\n    $('.modal').modal();\n    addCards(cardList);\n});\n\n\n//# sourceURL=webpack://sit725-2023-t1-prac4/./public/js/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/scripts.js"]();
/******/ 	
/******/ })()
;