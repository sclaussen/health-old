// Sheet names
var FOOD_SHEETS = [ 'Food' ];
var PLAN_SHEETS = [ 'Plan', 'Plan2', 'Shop' ];
var LOG_SHEET = "Log";
var LOGI_SHEET = "LogI";



// Food Sheet description of the data portion of the sheet
var FOOD_RANGE = 'A4:AG200';
var FOOD_FIRST_ROW = 5;
var FOOD_LAST_ROW = 150;

// Food Sheet Action Locations
var FOOD_DROPDOWN_ROW = 1;
var FOOD_DROPDOWN_COLUMN = 1;

// Food Sheet Column Names
var FOOD_NAME_COLUMN = 1;
var FOOD_NICKNAME_COLUMN = 2;
var FOOD_STATUS_COLUMN = 3;
var FOOD_GROUP_COLUMN = 4;
var FOOD_CATEGORY_COLUMN = 5;
var FOOD_STORE_COLUMN = 6;
var FOOD_FULLNAME_COLUMN = 7;
var FOOD_BREAKFAST_COLUMN = 8;
var FOOD_LUNCH_COLUMN = 9;
var FOOD_DINNER_COLUMN = 10;
var FOOD_NUTRIENTSURL_COLUMN = 11;
var FOOD_RETAILURL_COLUMN = 12;
var FOOD_COST_COLUMN = 13;
var FOOD_COSTOUNCE_COLUMN = 14;
var FOOD_COSTLB_COLUMN = 15;
var FOOD_COSTGRAM_COLUMN = 16;
var FOOD_SERVINGSIZE_COLUMN = 17;
var FOOD_NORMALIZED_COLUMN = 18;
var FOOD_UNIT_COLUMN = 19;
var FOOD_MIN = 20;
var FOOD_MAX = 21;
var FOOD_INC = 22;
var FOOD_PREPARE = 23;
var FOOD_CALORIES_COLUMN = 24;
var FOOD_FAT_COLUMN = 25;
var FOOD_SATURATED_COLUMN = 26;
var FOOD_TRANS_COLUMN = 27;
var FOOD_POLY_COLUMN = 28;
var FOOD_MONO_COLUMN = 29;
var FOOD_CHOLESTEROL_COLUMN = 30;
var FOOD_SODIUM_COLUMN = 31;
var FOOD_CARBOHYDRATES_COLUMN = 32;
var FOOD_FIBER_COLUMN = 33;
var FOOD_SUGAR_COLUMN = 34;
var FOOD_SUGARPLUS_COLUMN = 35;
var FOOD_ALCOHOL_COLUMN = 36;
var FOOD_NETCARBOHYDRATES_COLUMN = 37;
var FOOD_PROTEIN_COLUMN = 38;

var FOOD_COLUMN_NAMES = [
    'name',
    'nickname',
    'status',
    'group',
    'category',
    'store',
    'fullname',
    'breakfast',
    'lunch',
    'dinner',
    'nutrientsurl',
    'retailurl',
    'cost',
    'costounce',
    'costlb',
    'costgram',
    'servingsize',
    'servingsmultiplier',
    'unit',
    'min',
    'max',
    'inc',
    'prepare',
    'servingcalories',
    'servingfat',
    'servingsaturated',
    'servingtrans',
    'servingpoly',
    'servingmono',
    'servingcholesterol',
    'servingsodium',
    'servingcarbohydrates',
    'servingfiber',
    'servingsugar',
    'servingsugarplus',
    'servingalcohol',
    'servingnetcarbs',
    'servingprotein',
];



// Plan Sheet description of the data portion of the sheet
var PLAN_RANGE = 'A4:BZ200';
var PLAN_FIRST_ROW = 5;
var PLAN_LAST_ROW = 120;
var PLAN_FIRST_COLUMN = 0;
var PLAN_LAST_COLUMN = 78;

// Plan Sheet Action Locations
var PLAN_GROUP_DROPDOWN_ROW = 1;
var PLAN_GROUP_DROPDOWN_COLUMN = 1;
var PLAN_GROUP_DROPDOWN_CELL = 'A1';

var PLAN_MEAL_DROPDOWN_ROW = 2;
var PLAN_MEAL_DROPDOWN_COLUMN = 1;

var PLAN_POPULATE_INGREDIENTS_DROPDOWN_ROW = 1;
var PLAN_POPULATE_INGREDIENTS_DROPDOWN_COLUMN = 27;

var PLAN_PREPARE_CHECKBOX_ROW = 2;
var PLAN_PREPARE_CHECKBOX_COLUMN = 28;

var PLAN_LOG_DROPDOWN_ROW = 3;
var PLAN_LOG_DROPDOWN_COLUMN = 27;

// Plan Sheet Column Names
var PLAN_NICKNAME_COLUMN = 1;
var PLAN_NAME_COLUMN = 2;
var PLAN_RETAILURL_COLUMN = 3;
var PLAN_COST_COLUMN = 4;
var PLAN_COST_PER_LB_COLUMN = 5;
var PLAN_GROUP_COLUMN = 6;
var PLAN_CATEGORY_COLUMN = 7;
var PLAN_BREAKFAST_COLUMN = 8;
var PLAN_LUNCH_COLUMN = 9;
var PLAN_DINNER_COLUMN = 10;

var PLAN_SERVINGS_COLUMN = 25;
var PLAN_GRAMS_COLUMN = 26;
var PLAN_SERVING_COLUMN = 27;
var PLAN_UNIT_COLUMN = 28;
var PLAN_FAT_REQUIRED_COLUMN = 29;
var PLAN_FIBER_REQUIRED_COLUMN = 30;
var PLAN_CARB_REQUIRED_COLUMN = 31;
var PLAN_PROTEIN_REQUIRED_COLUMN = 32;
var PLAN_CALORIES_COLUMN = 33;
var PLAN_FAT_COLUMN = 34;
var PLAN_SATURATED_FAT_COLUMN = 35;
var PLAN_TRANS_FAT_COLUMN = 36;
var PLAN_POLY_FAT_COLUMN = 37;
var PLAN_MONO_FAT_COLUMN = 38;
var PLAN_CHOL_COLUMN = 39;
var PLAN_NA_COLUMN = 40;
var PLAN_CARB_COLUMN = 41;
var PLAN_FIBER_COLUMN = 42;
var PLAN_SUGAR_COLUMN = 43;
var PLAN_SUGAR_PLUS_COLUMN = 44;
var PLAN_SUGAR_ALCOHOL_COLUMN = 45;
var PLAN_NET_CARB_COLUMN = 46;
var PLAN_PROTEIN_COLUMN = 47;
var PLAN_COST_COLUMN = 48;



// Colors used for threshold highlighting
var GREEN = '#b6d7a8';     // light green 2
var YELLOW = '#fff2cc';    // light yellow 3
var ORANGE = '#f4cccc';    // light red 3
var RED = '#e06666';       // light red 1



var mealIngredientData = {
    'Chicken': {
        'Coconut Oil': 1,
        'Olive Oil': 2,

        'Chicken': 220,
        'Eggs': 4,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 1,

        'Blue': 7,
        'Feta': 7,
        'Mozzarella': 7,
        'Parmesan': 7,

        'Pecans': 7,
        'Walnuts': 7,

        'Chia': 1,
        'Pumpkin': 14,
    },
    'Salmon': {
        'Coconut Oil': 1,
        'Olive Oil': 1,

        'Eggs': 4,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 1,

        'Blue': 14,
        'Feta': 14,
        'Mozzarella': 14,
        'Parmesan': 14,

        'Pecans': 0,
        'Walnuts': 0,

        'Chia': 1,
        'Pumpkin': 14,
    },
    'Pork Chop': {
        'Coconut Oil': 1,
        'Olive Oil': 1,

        'Eggs': 4,
        'Pork': 220,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 1,

        'Feta': 7,
        'Mozzarella': 7,
        'Parmesan': 7,

        'Pecans': 0,
        'Walnuts': 0,

        'Chia': 1,
        'Pumpkin': 14,
    },
    'Ground Beef': {
        'Olive Oil': 1,

        'Ground Beef': 200,
        'Eggs': 2,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,

        'Avocado': 1,

        'Blue': 7,
        'Feta': 14,
        'Mozzarella': 14,
        'Parmesan': 14,

        'Chia': 1,
        'Pumpkin': 14,
    },
    'Beef Chuck Roast': {
        'Coconut Oil': 1,
        'Olive Oil': 0.5,

        'Beef Chuck Roast': 150,
        'Eggs': 4,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 0.5,

        'Blue': 14,
        'Feta': 14,
        'Mozzarella': 28,
        'Parmesan': 28,

        'Chia': 1,
    },
    'Pork Shoulder': {
        'Coconut Oil': 1,
        'Olive Oil': .5,

        'Eggs': 2,
        'Pork': 200,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 1,

        'Mozzarella': 14,
        'Parmesan': 14,

        'Chia': 1,
    },
    'Top Sirloin Steak': {
        'Coconut Oil': 1,
        'Olive Oil': 1,

        'Top Sirloin Steak': 280,
        'Eggs': 3,

        'Arugula': 30,
        'Kale': 60,

        'Carrots': 28,
        'Mushrooms': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado': 1,

        'Mozzarella': 28,
        'Parmesan': 28,

        'Chia': 1,
        'Pumpkin': 14,
    },
};


function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var myMenu = [
        {
            name: "Log",
            functionName: "log"
        },
        {
            name: "Export",
            functionName: "exportFood"
        },
    ];

    ss.addMenu("77", myMenu);
}


function onEdit(event) {

    // Determine if the event is on a sheet that we have callbacks registered
    var sheet = SpreadsheetApp.getActiveSheet();
    var sheetName = sheet.getName();
    if (PLAN_SHEETS.includes(sheetName) === false) {
        return;
    }


    var row = event.range.getRow();
    var column = event.range.getColumn();
    Logger.log(event, sheetName, row, column);


    if (row == PLAN_GROUP_DROPDOWN_ROW && column == PLAN_GROUP_DROPDOWN_COLUMN) {
        createFilter(sheet);
        filterByGroup(sheet, event.value);
        return;
    }

    if (row == PLAN_MEAL_DROPDOWN_ROW && column == PLAN_MEAL_DROPDOWN_COLUMN) {
        createFilter(sheet);
        filterByMeal(sheet, event.value);
        return;
    }

    if (row == PLAN_PREPARE_CHECKBOX_ROW && column == PLAN_PREPARE_CHECKBOX_COLUMN) {
        createFilter(sheet);
        prepare(sheet);
        return;
    }

    if (row == PLAN_POPULATE_INGREDIENTS_DROPDOWN_ROW && column == PLAN_POPULATE_INGREDIENTS_DROPDOWN_COLUMN) {
        populateMealIngredients(sheet, event.value);
        return;
    }

    // Color code macronutrient values based on thresholds
    if (column == PLAN_SERVING_COLUMN) {
        optimal(sheet, { row: 2, column: PLAN_CALORIES_COLUMN }, { row: 1, column: PLAN_CALORIES_COLUMN }, 150);
        optimal(sheet, { row: 2, column: PLAN_FAT_COLUMN }, { row: 1, column: PLAN_FAT_COLUMN }, 2);
        maximum(sheet, { row: 2, column: PLAN_NET_CARB_COLUMN }, { row: 1, column: PLAN_NET_CARB_COLUMN }, 0);
        optimal(sheet, { row: 2, column: PLAN_PROTEIN_COLUMN }, { row: 1, column: PLAN_PROTEIN_COLUMN }, 2);
        maximum(sheet, { row: 2, column: PLAN_NA_COLUMN }, { row: 1, column: PLAN_NA_COLUMN }, 0);
        maximum(sheet, { row: 2, column: PLAN_CARB_COLUMN }, { row: 1, column: PLAN_CARB_COLUMN }, 0);
        minimum(sheet, { row: 2, column: PLAN_FIBER_COLUMN }, { row: 1, column: PLAN_FIBER_COLUMN }, 0);
    }
}


function exportFood() {
    Logger.log('Exporting food');

    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Food');
    let foods = [];
    let data = sheet.getRange(1, 1, FOOD_LAST_ROW, FOOD_PROTEIN_COLUMN).getValues();
    for (let row = FOOD_FIRST_DATA_ROW - 1; row < (FOOD_LAST_ROW - 1); row++) {

        // Skip any blank rows
        if (data[row][0] === '') {
            continue;
        }

        // // Used for debugging only
        // Logger.log(data[row]);

        let ingredient = {
            name: data[row][FOOD_NAME_COLUMN - 1]
        }

        for (let col = FOOD_NICKNAME_COLUMN - 1; col <= FOOD_PROTEIN_COLUMN - 1; col++) {
            ingredient[FOOD_COLUMN_NAMES[col]] = data[row][col];
        }

        foods.push(ingredient);
    }

    DriveApp.createFile('ingredients.json', JSON.stringify(foods, null, 4));
}


function populateMealIngredients(sheet, dropdownValue) {
    Logger.log('Populate Ingredients for the Meal: ' + dropdownValue);

    // Clear all the values in the servings column
    // Return if no ingredient population is required (eg clear only)
    sheet.getRange(PLAN_FIRST_ROW, PLAN_SERVING_COLUMN, PLAN_LAST_ROW - PLAN_FIRST_ROW).clear({ contentsOnly: true });
    if (dropdownValue === 'Clear') {
        Logger.log('Clear');
        return;
    }

    let ingredientNames = sheet.getRange(PLAN_FIRST_ROW, PLAN_NICKNAME_COLUMN, PLAN_LAST_ROW).getValues();
    let mealIngredients = mealIngredientData[dropdownValue];
    for (let servingName of Object.keys(mealIngredients)) {
        Logger.log('Populating ingredient: [' + servingName + ']');

        found = false;
        for (let row = 0; row < ingredientNames.length; row++) {

            // Get the value of the cell which will be the name of the
            // food item, although some of these can be blank because
            // we have fetched PLAN_MAX_ITEMS from the sheet
            let cellValue = ingredientNames[row][0];
            if (!cellValue) {
                continue;
            }

            if (cellValue.startsWith(servingName)) {
                setValue(sheet, row + PLAN_FIRST_ROW, PLAN_SERVING_COLUMN, mealIngredients[servingName]);
                found = true;
                break;
            }
        }

        if (!found) {
            Logger.log('  - ERROR: The ingredient was not found');
        }
    }
}


function filterByGroup(sheet, dropdownValue) {

    // First, remove the filter, ...
    removeFilterFromColumn(sheet, PLAN_GROUP_COLUMN);

    switch (dropdownValue) {
    case 'Small':
        Logger.log('Group Filter -> Small');
        filterValueOutOfColumn(sheet, PLAN_GROUP_COLUMN, [ '2-Grande', '3-Venti' ]);
        break;
    case 'Grande':
        Logger.log('Group Filter -> Grande');
        filterValueOutOfColumn(sheet, PLAN_GROUP_COLUMN, [ '3-Venti' ]);
        break;
    case 'Venti':
        Logger.log('Group Filter -> Venti');
        break;
    }
}


function filterByMeal(sheet, dropdownValue) {
    Logger.log('Meal filter: ' + dropdownValue);

    removeFilterFromColumn(sheet, PLAN_BREAKFAST_COLUMN);
    removeFilterFromColumn(sheet, PLAN_LUNCH_COLUMN);
    removeFilterFromColumn(sheet, PLAN_DINNER_COLUMN);

    switch (dropdownValue) {
    case 'All Meals':
        Logger.log('Meal Filter -> All Meals');
        break;
    case 'Breakfast':
        Logger.log('Meal Filter -> Breakfast');
        filterEmptyCellsOutOfColumn(sheet, PLAN_BREAKFAST_COLUMN);
        break;
    case 'Lunch':
        Logger.log('Meal Filter -> Lunch');
        filterEmptyCellsOutOfColumn(sheet, PLAN_LUNCH_COLUMN);
        break;
    case 'Dinner':
        Logger.log('Meal Filter -> Dinner');
        filterEmptyCellsOutOfColumn(sheet, PLAN_DINNER_COLUMN);
        break;
    }
}


function prepare(sheet) {
    Logger.log('Prepare checkbox');
    removeFilterFromColumn(sheet, PLAN_GROUP_COLUMN);
    SpreadsheetApp.getActiveSheet().getRange(PLAN_GROUP_DROPDOWN_CELL).setValue('Venti');
    if (getValue(sheet, PLAN_PREPARE_CHECKBOX_ROW, PLAN_PREPARE_CHECKBOX_COLUMN)) {
        filterEmptyCellsOutOfColumn(sheet, PLAN_SERVING_COLUMN);
    } else {
        removeFilterFromColumn(sheet, PLAN_SERVING_COLUMN);
    }
}


function log() {
    // Get the planning sheet
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Plan');

    // Get the data from the spreadsheet and the current date
    let date = Utilities.formatDate(new Date(), "America/Los_Angeles", "MM-dd-yy");
    let data = sheet.getRange(1, 1, PLAN_LAST_ROW, PLAN_COST_COLUMN).getValues();

    logMacros(sheet, data, date);
    logIngredients(sheet, data, date);
}


function logMacros(foodSheet, data, date) {
    let sheet = getLogSheet(foodSheet, LOG_SHEET);
    let values = [ [ date, data[1][PLAN_CALORIES_COLUMN - 1], data[1][PLAN_FAT_COLUMN - 1], data[1][PLAN_SATURATED_FAT_COLUMN - 1], data[1][PLAN_TRANS_FAT_COLUMN - 1], data[1][PLAN_POLY_FAT_COLUMN - 1], data[1][PLAN_MONO_FAT_COLUMN - 1], data[1][PLAN_CHOL_COLUMN - 1], data[1][PLAN_NA_COLUMN - 1], data[1][PLAN_CARB_COLUMN - 1], data[1][PLAN_FIBER_COLUMN - 1], data[1][PLAN_SUGAR_COLUMN - 1], data[1][PLAN_SUGAR_PLUS_COLUMN - 1], data[1][PLAN_SUGAR_ALCOHOL_COLUMN - 1], data[1][PLAN_NET_CARB_COLUMN - 1], data[1][PLAN_PROTEIN_COLUMN - 1], data[1][PLAN_COST_COLUMN - 1] ] ];
    Logger.log(values[0]);
    setRowValues(sheet, sheet.getDataRange().getLastRow() + 1, 1, values);
}


function logIngredients(foodSheet, data, date) {

    Logger.log('Log Ingredients');

    // Log the detailed information into the LogDetail sheet
    let sheet = getLogSheet(foodSheet, LOGI_SHEET);
    let lastRow = sheet.getDataRange().getLastRow() + 1;
    Logger.log('lastRow ' + lastRow);


    for (let row = PLAN_FIRST_ROW - 1; row < (PLAN_LAST_ROW - 1); row++) {


        // Skip any food items with zero grams since they weren't part of the meal
        if (data[row][PLAN_NICKNAME_COLUMN - 1] === '' || !data[row][PLAN_GRAMS_COLUMN - 1]) {
            continue;
        }
        Logger.log(data[row]);

        // Log (a) date and (b) name of the food
        let values = [ date, data[row][PLAN_NICKNAME_COLUMN - 1] ];

        for (let col = 0; col <= PLAN_LAST_COLUMN; col++) {
            switch (col) {
            case (PLAN_NAME_COLUMN - 1):
            case (PLAN_GRAMS_COLUMN - 1):
            case (PLAN_CALORIES_COLUMN - 1):
            case (PLAN_FAT_COLUMN - 1):
            case (PLAN_SATURATED_FAT_COLUMN - 1):
            case (PLAN_TRANS_FAT_COLUMN - 1):
            case (PLAN_POLY_FAT_COLUMN - 1):
            case (PLAN_MONO_FAT_COLUMN - 1):
            case (PLAN_CHOL_COLUMN - 1):
            case (PLAN_NA_COLUMN - 1):
            case (PLAN_CARB_COLUMN - 1):
            case (PLAN_FIBER_COLUMN - 1):
            case (PLAN_SUGAR_COLUMN - 1):
            case (PLAN_SUGAR_PLUS_COLUMN - 1):
            case (PLAN_SUGAR_ALCOHOL_COLUMN - 1):
            case (PLAN_NET_CARB_COLUMN - 1):
            case (PLAN_PROTEIN_COLUMN - 1):
            case (PLAN_COST_COLUMN - 1):
                values.push(data[row][col]);
            }
        }

        Logger.log(values);
        setRowValues(sheet, lastRow++, 1, [ values ]);
    }
}


// The background of the actuals using the "maximum" algorithm are
// colored as follows:
// - GREEN if the actual <= the goal
// - YELLOW if the actual <= the goal + range
// - ORANGE if the actual <= the goal + (range * 2)
// - RED if the actual > the goal + (range * 2)
function maximum(sheet, actualCellCoordinates, goalCellCoordinates, range) {
    // Get the actual from the actual cell
    let actualCell = sheet.getRange(actualCellCoordinates.row, actualCellCoordinates.column);
    let actual = actualCell.getValue();

    // Get the goal from the goal cell
    let goalCell = sheet.getRange(goalCellCoordinates.row, goalCellCoordinates.column);
    let goal = goalCell.getValue();

    let color = getMaximumColor(actual, goal, range);
    actualCell.setBackground(color);
}


function getMaximumColor(actual, goal, range) {
    if (actual <= goal) {
        return GREEN;
    }

    if (actual <= (goal + range)) {
        return YELLOW;
    }

    if (actual <= (goal + (range * 2))) {
        return ORANGE;
    }

    return RED;
}


// The background of the actuals using the "optimal" algorithm are
// colored as follows:
// - GREEN if the actual >= the goal - range and <= goal + range
// - YELLOW if the actual >= the goal - (range * 2) and <= goal + (range * 2)
// - ORANGE if the actual >= the goal - (range * 3) and <= goal + (range * 3)
// - RED if the actual > the goal + (range * 2)
function optimal(sheet, actualCellCoordinates, goalCellCoordinates, range) {
    // Get the actual from the actual cell
    let actualCell = sheet.getRange(actualCellCoordinates.row, actualCellCoordinates.column);
    let actual = actualCell.getValue();

    // Get the goal from the goal cell
    let goalCell = sheet.getRange(goalCellCoordinates.row, goalCellCoordinates.column);
    let goal = goalCell.getValue();

    let color = getOptimalColor(actual, goal, range);
    actualCell.setBackground(color);
}


function getOptimalColor(actual, goal, range) {
    if (actual >= (goal - range) && actual <= (goal + range)) {
        return GREEN;
    }

    if (actual >= (goal - (range * 2)) && actual <= (goal + (range * 2))) {
        return YELLOW;
    }

    if (actual >= (goal - (range * 3)) && actual <= (goal + (range * 3))) {
        return ORANGE;
    }

    return RED;
}


// The background of the actuals using the minimum algorithm are colored
// as follows:
// - GREEN if the actual >= the goal
// - YELLOW if the actual >= the goal - range
// - ORANGE if the actual >= the goal - (range * 2)
// - RED if the actual < the goal - (range * 2)
function minimum(sheet, actualCellCoordinates, goalCellCoordinates, range) {
    // Get the actual from the actual cell
    let actualCell = sheet.getRange(actualCellCoordinates.row, actualCellCoordinates.column);
    let actual = actualCell.getValue();

    // Get the goal from the goal cell
    let goalCell = sheet.getRange(goalCellCoordinates.row, goalCellCoordinates.column);
    let goal = goalCell.getValue();

    let color = getMinimumColor(actual, goal, range);
    actualCell.setBackground(color);
}


function getMinimumColor(actual, goal, range) {
    if (actual >= goal) {
        return GREEN;
    }

    if (actual >= (goal - range)) {
        return YELLOW;
    }

    if (actual >= (goal - (range * 2))) {
        return ORANGE;
    }

    return RED;
}


function getLogSheet(sheet, name) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}


function getValue(sheet, row, col) {
    return sheet.getRange(row, col).getValue();
}


function setValue(sheet, row, col, value) {
    let range = sheet.getRange(row, col);
    range.setValue(value);
}


function setRowValues(sheet, row, col, values) {
    let range = sheet.getRange(row, col, 1, values[0].length);
    range.setValues(values);
}


function createFilter(sheet) {
    if (!sheet.getFilter()) {
        sheet.getRange(RANGE).createFilter();
    }
}


function filterValueOutOfColumn(sheet, column, values) {
    sheet.getFilter().setColumnFilterCriteria(column, SpreadsheetApp.newFilterCriteria().setHiddenValues(values).build());
}


function filterEmptyCellsOutOfColumn(sheet, column) {
    sheet.getFilter().setColumnFilterCriteria(column, SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build());
}


function removeFilterFromColumn(sheet, column) {
    sheet.getFilter().removeColumnFilterCriteria(column);
}
