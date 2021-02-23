// Sheet names
var FOOD_SHEETS = [ 'Food' ];
var PLAN_SHEETS = [ 'Plan' ];
var LOG_SHEET = "Log";
var LOGI_SHEET = "LogI";



// Food Sheet description of the data portion of the sheet
var FOOD_RANGE = 'A4:AG200';
var FOOD_FIRST_DATA_ROW = 5;
var FOOD_LAST_DATA_ROW = 150;

// Food Sheet Action Locations
var FOOD_DROPDOWN_ROW = 1;
var FOOD_DROPDOWN_COL = 1;

// Food Sheet Column Names
var FOOD_INGREDIENT_COL = 1;
var FOOD_STATUS_COL = 2;
var FOOD_GROUP_COL = 3;
var FOOD_CATEGORY_COL = 4;
var FOOD_STORE_COL = 5;
var FOOD_BRAND_COL = 6;
var FOOD_BREAKFAST_COL = 7;
var FOOD_LUNCH_COL = 8;
var FOOD_DINNER_COL = 9;
var FOOD_NUTRIENTSURL_COL = 10;
var FOOD_RETAILURL_COL = 11;
var FOOD_COST_COL = 12;
var FOOD_COSTOUNCE_COL = 13;
var FOOD_COSTLB_COL = 14;
var FOOD_COSTGRAM_COL = 15;
var FOOD_SERVINGSIZE_COL = 16;
var FOOD_NORMALIZED_COL = 17;
var FOOD_UNIT_COL = 18;
var FOOD_CALORIES_COL = 19;
var FOOD_FAT_COL = 20;
var FOOD_SATURATED_COL = 21;
var FOOD_TRANS_COL = 22;
var FOOD_POLY_COL = 23;
var FOOD_MONO_COL = 24;
var FOOD_CHOLESTEROL_COL = 25;
var FOOD_SODIUM_COL = 26;
var FOOD_CARBOHYDRATES_COL = 27;
var FOOD_FIBER_COL = 28;
var FOOD_SUGAR_COL = 29;
var FOOD_SUGARPLUS_COL = 30;
var FOOD_ALCOHOL_COL = 31;
var FOOD_NETCARBOHYDRATES_COL = 32;
var FOOD_PROTEIN_COL = 33;

var FOOD_COLUMN_NAMES = [
    'ingredient',
    'status',
    'group',
    'category',
    'store',
    'brand',
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
    'normalized',
    'unit',
    'calories',
    'fat',
    'saturated',
    'trans',
    'poly',
    'mono',
    'cholesterol',
    'sodium',
    'carbohydrates',
    'fiber',
    'sugar',
    'sugarplus',
    'alcohol',
    'netcarbohydrates',
    'protein',
];



// Plan Sheet description of the data portion of the sheet
var PLAN_RANGE = 'A4:AZ200';
var PLAN_FIRST_DATA_ROW = 5;
var PLAN_LAST_DATA_ROW = 120;

// Plan Sheet Action Locations
var PLAN_GROUP_DROPDOWN_ROW = 1;
var PLAN_GROUP_DROPDOWN_COL = 1;

var PLAN_MEAL_DROPDOWN_ROW = 2;
var PLAN_MEAL_DROPDOWN_COL = 1;

var PLAN_POPULATE_INGREDIENTS_DROPDOWN_ROW = 1;
var PLAN_POPULATE_INGREDIENTS_DROPDOWN_COL = 27;

var PLAN_PREPARE_CHECKBOX_ROW = 2;
var PLAN_PREPARE_CHECKBOX_COL = 28;

var PLAN_LOG_DROPDOWN_ROW = 3;
var PLAN_LOG_DROPDOWN_COL = 27;

// Plan Sheet Column Names
var PLAN_INGREDIENT_COL = 1
var PLAN_AMZ_COL = 2;
var PLAN_COST_COL = 3;
var PLAN_COST_PER_LB_COL = 4;

var PLAN_GROUP_COL = 5;
var PLAN_CATEGORY_COL = 6;
var PLAN_BREAKFAST_COL = 7;
var PLAN_LUNCH_COL = 8;
var PLAN_DINNER_COL = 9;

var PLAN_SERVINGS_COL = 25;
var PLAN_GRAMS_COL = 26;
var PLAN_SERVING_COL = 27;
var PLAN_UNIT_COL = 28;
var PLAN_FAT_REQUIRED_COL = 29;
var PLAN_FIBER_REQUIRED_COL = 30;
var PLAN_CARB_REQUIRED_COL = 31;
var PLAN_PROTEIN_REQUIRED_COL = 32;
var PLAN_CALORIES_COL = 33;
var PLAN_FAT_COL = 34;
var PLAN_SATURATED_FAT_COL = 35;
var PLAN_TRANS_FAT_COL = 36;
var PLAN_POLY_FAT_COL = 37;
var PLAN_MONO_FAT_COL = 38;
var PLAN_CHOL_COL = 39;
var PLAN_NA_COL = 40;
var PLAN_CARB_COL = 41;
var PLAN_FIBER_COL = 42;
var PLAN_SUGAR_COL = 43;
var PLAN_SUGAR_PLUS_COL = 44;
var PLAN_SUGAR_ALCOHOL_COL = 45;
var PLAN_NET_CARB_COL = 46;
var PLAN_PROTEIN_COL = 47;
var PLAN_COST_COL = 48;



// Colors used for threshold highlighting
var GREEN = '#b6d7a8';     // light green 2
var YELLOW = '#fff2cc';    // light yellow 3
var ORANGE = '#f4cccc';    // light red 3
var RED = '#e06666';       // light red 1



var mealIngredientData = {
    'Chicken': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': 2,

        'Chicken (boneless skinless breast)': 220,
        'Eggs (org) (Vital)': 4,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano Pepper': 2,

        'Avocado (haas)': 1,

        'Blue Cheese': 7,
        'Feta Cheese': 7,
        'Mozzarella Cheese': 7,
        'Parmesan Cheese': 7,

        'Pecans': 7,
        'Walnuts': 7,

        'Chia Seeds': 1,
        'Pumpkin Seeds': 14,
    },
    'Salmon': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': 1,

        'Eggs (org) (Vital)': 4,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano Pepper': 2,

        'Avocado (haas)': 1,

        'Blue Cheese': 14,
        'Feta Cheese': 14,
        'Mozzarella Cheese': 14,
        'Parmesan Cheese': 14,

        'Pecans': 0,
        'Walnuts': 0,

        'Chia Seeds': 1,
        'Pumpkin Seeds': 14,
    },
    'Pork Chop': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': 1,

        'Eggs (org) (Vital)': 4,
        'Pork (chop)': 220,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano Pepper': 2,

        'Avocado (haas)': 1,

        'Feta Cheese': 7,
        'Mozzarella Cheese': 7,
        'Parmesan Cheese': 7,

        'Pecans': 0,
        'Walnuts': 0,

        'Chia Seeds': 1,
        'Pumpkin Seeds': 14,
    },
    'Beef': {
        'Extra Virgin Olive Oil': 1,

        'Beef (ground)': 200,
        'Eggs (org) (Vital)': 2,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,

        'Avocado (haas)': 1,

        'Blue Cheese': 7,
        'Feta Cheese': 14,
        'Mozzarella Cheese': 14,
        'Parmesan Cheese': 14,

        'Chia Seeds': 1,
        'Pumpkin Seeds': 14,
    },
    'Beef Chuck Roast': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': 0.5,

        'Beef (chuck roast)': 150,
        'Eggs (org) (Vital)': 4,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano': 2,

        'Avocado (haas)': 0.5,

        'Blue Cheese': 14,
        'Feta Cheese': 14,
        'Mozzarella Cheese': 28,
        'Parmesan Cheese': 28,

        'Chia Seeds': 1,
    },
    'Pork Shoulder': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': .5,

        'Eggs (org) (Vital)': 2,
        'Pork (shoulder butt': 200,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano Pepper': 2,

        'Avocado (haas)': 1,

        'Mozzarella Cheese': 14,
        'Parmesan Cheese': 14,

        'Chia Seeds': 1,
    },
    'Top Sirloin': {
        'Coconut Oil': 1,
        'Extra Virgin Olive Oil': 1,

        'Beef (steak: top sirloin) (BB)': 280,
        'Eggs (org) (Vital)': 3,

        'Arugula': 30,
        'Kale (org)': 60,

        'Carrots': 28,
        'Mushrooms (white)': 100,
        'Radish': 28,
        'Salsa': 3,
        'Serrano Pepper': 2,

        'Avocado (haas)': 1,

        'Mozzarella Cheese': 28,
        'Parmesan Cheese': 28,

        'Chia Seeds': 1,
        'Pumpkin Seeds': 14,
    },
};


function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var myMenu = [
        {
            name: "Log Daily Macros",
            functionName: "log"
        },
        {
            name: "Export Food",
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


    if (row == PLAN_GROUP_DROPDOWN_ROW && column == PLAN_GROUP_DROPDOWN_COL) {
        createFilter(sheet);
        filterByGroup(sheet, event.value);
        return;
    }

    if (row == PLAN_MEAL_DROPDOWN_ROW && column == PLAN_MEAL_DROPDOWN_COL) {
        createFilter(sheet);
        filterByMeal(sheet, event.value);
        return;
    }

    if (row == PLAN_PREPARE_CHECKBOX_ROW && column == PLAN_PREPARE_CHECKBOX_COL) {
        createFilter(sheet);
        prepare(sheet);
        return;
    }

    if (row == PLAN_POPULATE_INGREDIENTS_DROPDOWN_ROW && column == PLAN_POPULATE_INGREDIENTS_DROPDOWN_COL) {
        populateMealIngredients(sheet, event.value);
        return;
    }

    // Color code macronutrient values based on thresholds
    if (column == PLAN_SERVING_COL) {
        threshold(sheet, PLAN_CALORIES_COL, 5);
        threshold(sheet, PLAN_FAT_COL, 3);
        cap(sheet, PLAN_NET_CARB_COL, 3, .25);
        threshold(sheet, PLAN_PROTEIN_COL, 2);
        cap(sheet, PLAN_NA_COL, 0, 3);
        cap(sheet, PLAN_CARB_COL, 20, 12.5);
        goal(sheet, PLAN_FIBER_COL, 1);
    }
}


function exportFood() {
    Logger.log('Exporting food');

    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Food');
    let foods = [];
    let data = sheet.getRange(1, 1, FOOD_LAST_DATA_ROW, FOOD_PROTEIN_COL).getValues();
    for (let row = FOOD_FIRST_DATA_ROW - 1; row < (FOOD_LAST_DATA_ROW - 1); row++) {

        // Skip any blank rows
        if (data[row][0] === '') {
            continue;
        }

        // Used for debugging only
        Logger.log(data[row]);

        let ingredient = {
            name: data[row][PLAN_INGREDIENT_COL - 1]
        }

        for (let col = FOOD_STATUS_COL - 1; col <= FOOD_PROTEIN_COL - 1; col++) {
            ingredient[FOOD_COLUMN_NAMES[col]] = data[row][col];
        }

        foods.push(ingredient);
    }

    DriveApp.createFile('food.yaml', JSON.stringify(foods, null, 4));
}


function populateMealIngredients(sheet, dropdownValue) {
    Logger.log('Populate Ingredients for the Meal: ' + dropdownValue);

    // Clear all the values in the servings column
    // Return if no ingredient population is required (eg clear only)
    sheet.getRange(PLAN_FIRST_DATA_ROW, PLAN_SERVING_COL, PLAN_LAST_DATA_ROW - PLAN_FIRST_DATA_ROW).clear({ contentsOnly: true });
    if (dropdownValue === 'Clear') {
        Logger.log('Clear');
        return;
    }

    let ingredientNames = sheet.getRange(PLAN_FIRST_DATA_ROW, PLAN_INGREDIENT_COL, PLAN_LAST_DATA_ROW).getValues();
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
                setValue(sheet, row + PLAN_FIRST_DATA_ROW, PLAN_SERVING_COL, mealIngredients[servingName]);
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
    removeFilterFromColumn(sheet, PLAN_GROUP_COL);

    switch (dropdownValue) {
    case 'Small':
        Logger.log('Group Filter -> Small');
        filterValueOutOfColumn(sheet, PLAN_GROUP_COL, [ '2-Grande', '3-Venti' ]);
        break;
    case 'Grande':
        Logger.log('Group Filter -> Grande');
        filterValueOutOfColumn(sheet, PLAN_GROUP_COL, [ '3-Venti' ]);
        break;
    case 'Venti':
        Logger.log('Group Filter -> Venti');
        break;
    }
}


function filterByMeal(sheet, dropdownValue) {
    Logger.log('Meal filter: ' + dropdownValue);

    removeFilterFromColumn(sheet, PLAN_BREAKFAST_COL);
    removeFilterFromColumn(sheet, PLAN_LUNCH_COL);
    removeFilterFromColumn(sheet, PLAN_DINNER_COL);

    switch (dropdownValue) {
    case 'All Meals':
        Logger.log('Meal Filter -> All Meals');
        break;
    case 'Breakfast':
        Logger.log('Meal Filter -> Breakfast');
        filterEmptyCellsOutOfColumn(sheet, PLAN_BREAKFAST_COL);
        break;
    case 'Lunch':
        Logger.log('Meal Filter -> Lunch');
        filterEmptyCellsOutOfColumn(sheet, PLAN_LUNCH_COL);
        break;
    case 'Dinner':
        Logger.log('Meal Filter -> Dinner');
        filterEmptyCellsOutOfColumn(sheet, PLAN_DINNER_COL);
        break;
    }
}


function prepare(sheet) {
    Logger.log('Prepare checkbox');
    if (getValue(sheet, PLAN_PREPARE_CHECKBOX_ROW, PLAN_PREPARE_CHECKBOX_COL)) {
        filterEmptyCellsOutOfColumn(sheet, PLAN_SERVING_COL);
    } else {
        removeFilterFromColumn(sheet, PLAN_SERVING_COL);
    }
}


function log() {
    // Get the planning sheet
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Plan');

    // Get the data from the spreadsheet and the current date
    let date = Utilities.formatDate(new Date(), "America/Los_Angeles", "MM-dd-yy");
    let data = sheet.getRange(1, 1, PLAN_LAST_DATA_ROW, PLAN_COST_COL).getValues();

    logMacros(sheet, data, date);
    logIngredients(sheet, data, date);
}


function logMacros(foodSheet, data, date) {
    let sheet = getLogSheet(foodSheet, LOG_SHEET);
    let values = [ [ date, data[1][PLAN_CALORIES_COL - 1], data[1][PLAN_FAT_COL - 1], data[1][PLAN_SATURATED_FAT_COL - 1], data[1][PLAN_TRANS_FAT_COL - 1], data[1][PLAN_POLY_FAT_COL - 1], data[1][PLAN_MONO_FAT_COL - 1], data[1][PLAN_CHOL_COL - 1], data[1][PLAN_NA_COL - 1], data[1][PLAN_CARB_COL - 1], data[1][PLAN_FIBER_COL - 1], data[1][PLAN_SUGAR_COL - 1], data[1][PLAN_SUGAR_PLUS_COL - 1], data[1][PLAN_SUGAR_ALCOHOL_COL - 1], data[1][PLAN_NET_CARB_COL - 1], data[1][PLAN_PROTEIN_COL - 1], data[1][PLAN_COST_COL - 1] ] ];
    Logger.log(values[0]);
    setRowValues(sheet, sheet.getDataRange().getLastRow() + 1, 1, values);
}


function logIngredients(foodSheet, data, date) {

    // Log the detailed information into the LogDetail sheet
    let sheet = getLogSheet(foodSheet, LOGI_SHEET);
    let lastRow = sheet.getDataRange().getLastRow() + 1;


    for (let row = PLAN_FIRST_DATA_ROW - 1; row < (PLAN_LAST_DATA_ROW - 1); row++) {


        // Skip any food items with zero grams since they weren't part of the meal
        if (data[row][PLAN_INGREDIENT_COL - 1] === '' || !data[row][PLAN_GRAMS_COL - 1]) {
            continue;
        }
        Logger.log(data[row]);

        // Log (a) date and (b) name of the food
        let values = [ date, data[row][PLAN_INGREDIENT_COL - 1] ];

        for (let col = PLAN_GRAMS_COL - 1; col <= PLAN_COST_COL - 1; col++) {
            switch (col) {
            case (PLAN_GRAMS_COL - 1):
            case (PLAN_CALORIES_COL - 1):
            case (PLAN_FAT_COL - 1):
            case (PLAN_SATURATED_FAT_COL - 1):
            case (PLAN_TRANS_FAT_COL - 1):
            case (PLAN_POLY_FAT_COL - 1):
            case (PLAN_MONO_FAT_COL - 1):
            case (PLAN_CHOL_COL - 1):
            case (PLAN_NA_COL - 1):
            case (PLAN_CARB_COL - 1):
            case (PLAN_FIBER_COL - 1):
            case (PLAN_SUGAR_COL - 1):
            case (PLAN_SUGAR_PLUS_COL - 1):
            case (PLAN_SUGAR_ALCOHOL_COL - 1):
            case (PLAN_NET_CARB_COL - 1):
            case (PLAN_PROTEIN_COL - 1):
            case (PLAN_COST_COL - 1):
                values.push(data[row][col]);
            }
        }

        Logger.log(values);
        setRowValues(sheet, lastRow++, 1, [ values ]);
    }
}


function threshold(sheet, col, deviationPercentage) {
    let goal = getValue(sheet, 1, col);
    let value = getValue(sheet, 2, col);
    let percentage = Math.abs((goal - value) / goal) * 100;

    let cell = sheet.getRange(2, col);
    if (percentage > (deviationPercentage * 3)) {
        cell.setBackground(RED);
        return;
    }

    if (percentage > (deviationPercentage * 2)) {
        cell.setBackground(ORANGE);
        return;
    }

    if (percentage > deviationPercentage) {
        cell.setBackground(YELLOW);
        return;
    }

    cell.setBackground(GREEN);
}


function goal(sheet, col, deviationPercentage) {
    let goal = getValue(sheet, 1, col);
    let value = getValue(sheet, 2, col);
    Logger.log('goal: ' + goal + '  value: ' + value);

    let cell = sheet.getRange(2, col);
    if (value >= goal) {
        cell.setBackground(GREEN);
        return;
    }

    let percentage = Math.abs((goal - value) / goal) * 100;
    if (percentage > (deviationPercentage * 3)) {
        cell.setBackground(RED);
        return;
    }

    if (percentage > (deviationPercentage * 2)) {
        cell.setBackground(ORANGE);
        return;
    }

    if (percentage > deviationPercentage) {
        cell.setBackground(YELLOW);
        return;
    }

    cell.setBackground(GREEN);
}


function cap(sheet, col, over, deviationPercentage) {
    let goal = sheet.getRange(1, col).getValue();
    let cell = sheet.getRange(2, col);
    let value = cell.getValue();
    let percentage = ((goal - value) / goal) * 100;

    if (percentage < 0 && Math.abs(percentage) < over) {
        cell.setBackground(ORANGE);
        return;
    }

    if (percentage < 0) {
        cell.setBackground(RED);
        return;
    }

    if (percentage < deviationPercentage) {
        cell.setBackground(ORANGE);
        return;
    }

    if (percentage < (deviationPercentage * 2)) {
        cell.setBackground(YELLOW);
        return;
    }

    cell.setBackground(GREEN);
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
