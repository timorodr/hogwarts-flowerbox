// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

// ***************************** Year 1 *********************************

$(() => {
	// put jQuery in here


const $container = $("#container")
// console.log($container)

const $h1 = $("<h1></h1>").text("Hogwarts")
// console.log($h1)

$container.append($h1)


// ***************************** Year 2 *********************************


const $h2 = $("<h2></h2>").text("Timothy Rodriguez")
$container.append($h2)

const $h3 = $("<h3></h3>").text("Slytherin")
$container.append($h3)

const $h4 = $("<h4></h4>").text("Hank").addClass("owl")
$container.append($h4)

const $h4v2 = $("<h4></h4>").text("Holly Wand with Unicorn Hair Core")
$container.append($h4v2)


// ***************************** Year 3 *********************************


const $ul = $("<ul></ul>").attr("storage", "trunk")
$container.append($ul)

const $li = $("<li></li>").text("butter beer")
$ul.append($li)

const $li1 = $("<li></li>").text("invisibility cloak").addClass("secret")
$ul.append($li1)

const $li2 = $("<li></li>").text("magic map").addClass("secret")
$ul.append($li2)

const $li3 = $("<li></li>").text("time turner").addClass("secret")
$ul.append($li3)

const $li4 = $("<li></li>").text("leash").addClass("owl")
$ul.append($li4)

const $li5 = $("<li></li>").text("Bertie Bott's Every Flavor [Jelly] Beans.")
$ul.append($li5)


// ***************************** Year 4 *********************************


const $h5 = $("<h5></h5>").text("Spring 2017")
$container.append($h5)

const $table = $("<table></table>")
$container.append($table)

const $thead = $("<thead></thead>")
$table.append($thead)

const $th = $("<th></th>").text("Day")
$thead.append($th)

const $th2 = $("<th></th>").text("Classes")
$thead.append($th2)

const $tr = $("<tr></tr>")
$table.append($tr)

const $td = $("<td></td>").text("Monday")
$tr.append($td)

const $td2 = $("<td></td>").text("Potions, Transfiguration, History of Magic")
$tr.append($td2)

const $tr2 = $("<tr></tr>")
$table.append($tr2)

const $tr3 = $("<tr></tr>")
$table.append($tr3)

const $tr4 = $("<tr></tr>")
$table.append($tr4)

const $tr5 = $("<tr></tr>")
$table.append($tr5)

const $td3 = $("<td></td>").text("Tuesday")
$tr2.append($td3)

const $td4 = $("<td></td>").text("Divination, Herbology, Defense Against the Dark Arts, Quidditch practice")
$tr2.append($td4)

const $td5 = $("<td></td>").text("Wednesday")
$tr3.append($td5)

const $td6 = $("<td></td>").text("Potions, Transfiguration, History of Magic")
$tr3.append($td6)

const $td7 = $("<td></td>").text("Thursday")
$tr4.append($td7)

const $td8 = $("<td></td>").text("Divination, Herbology, Defense Against the Dark Arts, Quidditch practice")
$tr4.append($td8)

const $td9 = $("<td></td>").text("Friday")
$tr5.append($td9)

const $td10 = $("<td></td>").text("Potions, Transfiguration, History of Magic")
$tr5.append($td10)



// ***************************** Year 5 *********************************



$h4v2.remove()

$li.remove()

const $h4v3 = $("<h4></h4>").text("Second hand second wand buttery beer action")
$h4v3.insertAfter($h4) // insertAfter and insertBefore are handy!!! DONT FORGET TO USE THESE

$h4v3.css("color", "indigo")

$h4.remove()

const $h4pet = $("<h4></h4>").text("Hank").addClass("owl")
$container.append($h4pet)

$h4pet.remove()

const $h4petv2 = $("<h4></h4>").text("Hank").addClass("owl")
$h4petv2.insertBefore($h4v3)



// ***************************** Year 6 *********************************



$(".secret").hide("slow").delay(2000).show("slow")

$li4.addClass("cabbage") 
// adding a second class with a space still allows to target directly in css with second class name


// ***************************** Year 7 *********************************


$h5.text("Fall 2018")

const $liBB = $("<li></li>").text("Butter beer")
$liBB.insertBefore($li1)

$ul.attr("storage", "chest")

});