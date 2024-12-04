export const talibDescriptions =[
    {
        "group_name": "Math Operators",
        "functions": [
            {
                "name": "ADD",
                "group": "Math Operators",
                "hint": "Vector Arithmetic Add",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "DIV",
                "group": "Math Operators",
                "hint": "Vector Arithmetic Div",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MAX",
                "group": "Math Operators",
                "hint": "Highest value over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MAXINDEX",
                "group": "Math Operators",
                "hint": "Index of highest value over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MIN",
                "group": "Math Operators",
                "hint": "Lowest value over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MININDEX",
                "group": "Math Operators",
                "hint": "Index of lowest value over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MINMAX",
                "group": "Math Operators",
                "hint": "Lowest and highest values over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMin",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outMax",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MINMAXINDEX",
                "group": "Math Operators",
                "hint": "Indexes of lowest and highest values over a specified period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMinIdx",
                        "type": "integer",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outMaxIdx",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MULT",
                "group": "Math Operators",
                "hint": "Vector Arithmetic Mult",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SUB",
                "group": "Math Operators",
                "hint": "Vector Arithmetic Substraction",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SUM",
                "group": "Math Operators",
                "hint": "Summation",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Math Transform",
        "functions": [
            {
                "name": "ACOS",
                "group": "Math Transform",
                "hint": "Vector Trigonometric ACos",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "ASIN",
                "group": "Math Transform",
                "hint": "Vector Trigonometric ASin",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "ATAN",
                "group": "Math Transform",
                "hint": "Vector Trigonometric ATan",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CEIL",
                "group": "Math Transform",
                "hint": "Vector Ceil",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "COS",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Cos",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "COSH",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Cosh",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "EXP",
                "group": "Math Transform",
                "hint": "Vector Arithmetic Exp",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "FLOOR",
                "group": "Math Transform",
                "hint": "Vector Floor",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "LN",
                "group": "Math Transform",
                "hint": "Vector Log Natural",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "LOG10",
                "group": "Math Transform",
                "hint": "Vector Log10",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SIN",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Sin",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SINH",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Sinh",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SQRT",
                "group": "Math Transform",
                "hint": "Vector Square Root",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "TAN",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Tan",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "TANH",
                "group": "Math Transform",
                "hint": "Vector Trigonometric Tanh",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Overlap Studies",
        "functions": [
            {
                "name": "ACCBANDS",
                "group": "Overlap Studies",
                "hint": "Acceleration Bands",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 20,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "limit_upper",
                        "name": "outRealUpperBand",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outRealMiddleBand",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "limit_lower",
                        "name": "outRealLowerBand",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "BBANDS",
                "group": "Overlap Studies",
                "hint": "Bollinger Bands",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 5,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInNbDevUp",
                        "displayName": "Deviations up",
                        "defaultValue": 2,
                        "hint": "Deviation multiplier for upper band",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInNbDevDn",
                        "displayName": "Deviations down",
                        "defaultValue": 2,
                        "hint": "Deviation multiplier for lower band",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMAType",
                        "displayName": "MA Type",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "limit_upper",
                        "name": "outRealUpperBand",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outRealMiddleBand",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "limit_lower",
                        "name": "outRealLowerBand",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "DEMA",
                "group": "Overlap Studies",
                "hint": "Double Exponential Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "EMA",
                "group": "Overlap Studies",
                "hint": "Exponential Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "HT_TRENDLINE",
                "group": "Overlap Studies",
                "hint": "Hilbert Transform - Instantaneous Trendline",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "KAMA",
                "group": "Overlap Studies",
                "hint": "Kaufman Adaptive Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MA",
                "group": "Overlap Studies",
                "hint": "Moving average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMAType",
                        "displayName": "MA Type",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MAMA",
                "group": "Overlap Studies",
                "hint": "MESA Adaptive Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastLimit",
                        "displayName": "Fast Limit",
                        "defaultValue": 0.5,
                        "hint": "Upper limit use in the adaptive algorithm",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowLimit",
                        "displayName": "Slow Limit",
                        "defaultValue": 0.05,
                        "hint": "Lower limit use in the adaptive algorithm",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMAMA",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outFAMA",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MAVP",
                "group": "Overlap Studies",
                "hint": "Moving average with variable period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inPeriods",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInMinPeriod",
                        "displayName": "Minimum Period",
                        "defaultValue": 2,
                        "hint": "Value less than minimum will be changed to Minimum period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMaxPeriod",
                        "displayName": "Maximum Period",
                        "defaultValue": 30,
                        "hint": "Value higher than maximum will be changed to Maximum period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMAType",
                        "displayName": "MA Type",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MIDPOINT",
                "group": "Overlap Studies",
                "hint": "MidPoint over period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MIDPRICE",
                "group": "Overlap Studies",
                "hint": "Midpoint Price over period",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SAR",
                "group": "Overlap Studies",
                "hint": "Parabolic SAR",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInAcceleration",
                        "displayName": "Acceleration Factor",
                        "defaultValue": 0.02,
                        "hint": "Acceleration Factor used up to the Maximum value",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMaximum",
                        "displayName": "AF Maximum",
                        "defaultValue": 0.2,
                        "hint": "Acceleration Factor Maximum value",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SAREXT",
                "group": "Overlap Studies",
                "hint": "Parabolic SAR - Extended",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInStartValue",
                        "displayName": "Start Value",
                        "defaultValue": 0,
                        "hint": "Start value and direction. 0 for Auto, >0 for Long, <0 for Short",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInOffsetOnReverse",
                        "displayName": "Offset on Reverse",
                        "defaultValue": 0,
                        "hint": "Percent offset added/removed to initial stop on short/long reversal",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationInitLong",
                        "displayName": "AF Init Long",
                        "defaultValue": 0.02,
                        "hint": "Acceleration Factor initial value for the Long direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationLong",
                        "displayName": "AF Long",
                        "defaultValue": 0.02,
                        "hint": "Acceleration Factor for the Long direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationMaxLong",
                        "displayName": "AF Max Long",
                        "defaultValue": 0.2,
                        "hint": "Acceleration Factor maximum value for the Long direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationInitShort",
                        "displayName": "AF Init Short",
                        "defaultValue": 0.02,
                        "hint": "Acceleration Factor initial value for the Short direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationShort",
                        "displayName": "AF Short",
                        "defaultValue": 0.02,
                        "hint": "Acceleration Factor for the Short direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInAccelerationMaxShort",
                        "displayName": "AF Max Short",
                        "defaultValue": 0.2,
                        "hint": "Acceleration Factor maximum value for the Short direction",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "SMA",
                "group": "Overlap Studies",
                "hint": "Simple Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "T3",
                "group": "Overlap Studies",
                "hint": "Triple Exponential Moving Average (T3)",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 5,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInVFactor",
                        "displayName": "Volume Factor",
                        "defaultValue": 0.7,
                        "hint": "Volume Factor",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "TEMA",
                "group": "Overlap Studies",
                "hint": "Triple Exponential Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "TRIMA",
                "group": "Overlap Studies",
                "hint": "Triangular Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "WMA",
                "group": "Overlap Studies",
                "hint": "Weighted Moving Average",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Volatility Indicators",
        "functions": [
            {
                "name": "ATR",
                "group": "Volatility Indicators",
                "hint": "Average True Range",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "NATR",
                "group": "Volatility Indicators",
                "hint": "Normalized Average True Range",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "TRANGE",
                "group": "Volatility Indicators",
                "hint": "True Range",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Momentum Indicators",
        "functions": [
            {
                "name": "ADX",
                "group": "Momentum Indicators",
                "hint": "Average Directional Movement Index",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ADXR",
                "group": "Momentum Indicators",
                "hint": "Average Directional Movement Index Rating",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "APO",
                "group": "Momentum Indicators",
                "hint": "Absolute Price Oscillator",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastPeriod",
                        "displayName": "Fast Period",
                        "defaultValue": 12,
                        "hint": "Number of period for the fast MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowPeriod",
                        "displayName": "Slow Period",
                        "defaultValue": 26,
                        "hint": "Number of period for the slow MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMAType",
                        "displayName": "MA Type",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "AROON",
                "group": "Momentum Indicators",
                "hint": "Aroon",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line_dash",
                        "name": "outAroonDown",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outAroonUp",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "AROONOSC",
                "group": "Momentum Indicators",
                "hint": "Aroon Oscillator",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "BOP",
                "group": "Momentum Indicators",
                "hint": "Balance Of Power",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "CCI",
                "group": "Momentum Indicators",
                "hint": "Commodity Channel Index",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "CMO",
                "group": "Momentum Indicators",
                "hint": "Chande Momentum Oscillator",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "DX",
                "group": "Momentum Indicators",
                "hint": "Directional Movement Index",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MACD",
                "group": "Momentum Indicators",
                "hint": "Moving Average Convergence/Divergence",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastPeriod",
                        "displayName": "Fast Period",
                        "defaultValue": 12,
                        "hint": "Number of period for the fast MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowPeriod",
                        "displayName": "Slow Period",
                        "defaultValue": 26,
                        "hint": "Number of period for the slow MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSignalPeriod",
                        "displayName": "Signal Period",
                        "defaultValue": 9,
                        "hint": "Smoothing for the signal line (nb of period)",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMACD",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outMACDSignal",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "histogram",
                        "name": "outMACDHist",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MACDEXT",
                "group": "Momentum Indicators",
                "hint": "MACD with controllable MA type",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastPeriod",
                        "displayName": "Fast Period",
                        "defaultValue": 12,
                        "hint": "Number of period for the fast MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastMAType",
                        "displayName": "Fast MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for fast MA",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowPeriod",
                        "displayName": "Slow Period",
                        "defaultValue": 26,
                        "hint": "Number of period for the slow MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowMAType",
                        "displayName": "Slow MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for slow MA",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSignalPeriod",
                        "displayName": "Signal Period",
                        "defaultValue": 9,
                        "hint": "Smoothing for the signal line (nb of period)",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSignalMAType",
                        "displayName": "Signal MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for signal line",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMACD",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outMACDSignal",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "histogram",
                        "name": "outMACDHist",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MACDFIX",
                "group": "Momentum Indicators",
                "hint": "Moving Average Convergence/Divergence Fix 12/26",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInSignalPeriod",
                        "displayName": "Signal Period",
                        "defaultValue": 9,
                        "hint": "Smoothing for the signal line (nb of period)",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outMACD",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outMACDSignal",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "histogram",
                        "name": "outMACDHist",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MFI",
                "group": "Momentum Indicators",
                "hint": "Money Flow Index",
                "inputs": [
                    {
                        "name": "inPriceHLCV",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close",
                            "3": "volume"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key",
                        "volume": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MINUS_DI",
                "group": "Momentum Indicators",
                "hint": "Minus Directional Indicator",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MINUS_DM",
                "group": "Momentum Indicators",
                "hint": "Minus Directional Movement",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "MOM",
                "group": "Momentum Indicators",
                "hint": "Momentum",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 10,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "PLUS_DI",
                "group": "Momentum Indicators",
                "hint": "Plus Directional Indicator",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "PLUS_DM",
                "group": "Momentum Indicators",
                "hint": "Plus Directional Movement",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "PPO",
                "group": "Momentum Indicators",
                "hint": "Percentage Price Oscillator",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastPeriod",
                        "displayName": "Fast Period",
                        "defaultValue": 12,
                        "hint": "Number of period for the fast MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowPeriod",
                        "displayName": "Slow Period",
                        "defaultValue": 26,
                        "hint": "Number of period for the slow MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInMAType",
                        "displayName": "MA Type",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ROC",
                "group": "Momentum Indicators",
                "hint": "Rate of change : ((price/prevPrice)-1)*100",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 10,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ROCP",
                "group": "Momentum Indicators",
                "hint": "Rate of change Percentage: (price-prevPrice)/prevPrice",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 10,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ROCR",
                "group": "Momentum Indicators",
                "hint": "Rate of change ratio: (price/prevPrice)",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 10,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ROCR100",
                "group": "Momentum Indicators",
                "hint": "Rate of change ratio 100 scale: (price/prevPrice)*100",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 10,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "RSI",
                "group": "Momentum Indicators",
                "hint": "Relative Strength Index",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "STOCH",
                "group": "Momentum Indicators",
                "hint": "Stochastic",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastK_Period",
                        "displayName": "Fast-K Period",
                        "defaultValue": 5,
                        "hint": "Time period for building the Fast-K line",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowK_Period",
                        "displayName": "Slow-K Period",
                        "defaultValue": 3,
                        "hint": "Smoothing for making the Slow-K line. Usually set to 3",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowK_MAType",
                        "displayName": "Slow-K MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for Slow-K",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowD_Period",
                        "displayName": "Slow-D Period",
                        "defaultValue": 3,
                        "hint": "Smoothing for making the Slow-D line",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowD_MAType",
                        "displayName": "Slow-D MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for Slow-D",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line_dash",
                        "name": "outSlowK",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outSlowD",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "STOCHF",
                "group": "Momentum Indicators",
                "hint": "Stochastic Fast",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastK_Period",
                        "displayName": "Fast-K Period",
                        "defaultValue": 5,
                        "hint": "Time period for building the Fast-K line",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastD_Period",
                        "displayName": "Fast-D Period",
                        "defaultValue": 3,
                        "hint": "Smoothing for making the Fast-D line. Usually set to 3",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastD_MAType",
                        "displayName": "Fast-D MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for Fast-D",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outFastK",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outFastD",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "STOCHRSI",
                "group": "Momentum Indicators",
                "hint": "Stochastic Relative Strength Index",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastK_Period",
                        "displayName": "Fast-K Period",
                        "defaultValue": 5,
                        "hint": "Time period for building the Fast-K line",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastD_Period",
                        "displayName": "Fast-D Period",
                        "defaultValue": 3,
                        "hint": "Smoothing for making the Fast-D line. Usually set to 3",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInFastD_MAType",
                        "displayName": "Fast-D MA",
                        "defaultValue": 0,
                        "hint": "Type of Moving Average for Fast-D",
                        "type": "integer_list",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outFastK",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line",
                        "name": "outFastD",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "TRIX",
                "group": "Momentum Indicators",
                "hint": "1-day Rate-Of-Change (ROC) of a Triple Smooth EMA",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ULTOSC",
                "group": "Momentum Indicators",
                "hint": "Ultimate Oscillator",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod1",
                        "displayName": "First Period",
                        "defaultValue": 7,
                        "hint": "Number of bars for 1st period.",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInTimePeriod2",
                        "displayName": "Second Period",
                        "defaultValue": 14,
                        "hint": "Number of bars fro 2nd period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInTimePeriod3",
                        "displayName": "Third Period",
                        "defaultValue": 28,
                        "hint": "Number of bars for 3rd period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "WILLR",
                "group": "Momentum Indicators",
                "hint": "Williams' %R",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Cycle Indicators",
        "functions": [
            {
                "name": "HT_DCPERIOD",
                "group": "Cycle Indicators",
                "hint": "Hilbert Transform - Dominant Cycle Period",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "HT_DCPHASE",
                "group": "Cycle Indicators",
                "hint": "Hilbert Transform - Dominant Cycle Phase",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "HT_PHASOR",
                "group": "Cycle Indicators",
                "hint": "Hilbert Transform - Phasor Components",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInPhase",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outQuadrature",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "HT_SINE",
                "group": "Cycle Indicators",
                "hint": "Hilbert Transform - SineWave",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outSine",
                        "type": "real",
                        "flags": {}
                    },
                    {
                        "0": "line_dash",
                        "name": "outLeadSine",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "HT_TRENDMODE",
                "group": "Cycle Indicators",
                "hint": "Hilbert Transform - Trend vs Cycle Mode",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Volume Indicators",
        "functions": [
            {
                "name": "AD",
                "group": "Volume Indicators",
                "hint": "Chaikin A/D Line",
                "inputs": [
                    {
                        "name": "inPriceHLCV",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close",
                            "3": "volume"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key",
                        "volume": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "ADOSC",
                "group": "Volume Indicators",
                "hint": "Chaikin A/D Oscillator",
                "inputs": [
                    {
                        "name": "inPriceHLCV",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close",
                            "3": "volume"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key",
                        "volume": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInFastPeriod",
                        "displayName": "Fast Period",
                        "defaultValue": 3,
                        "hint": "Number of period for the fast MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInSlowPeriod",
                        "displayName": "Slow Period",
                        "defaultValue": 10,
                        "hint": "Number of period for the slow MA",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "OBV",
                "group": "Volume Indicators",
                "hint": "On Balance Volume",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    },
                    {
                        "name": "inPriceV",
                        "type": "price",
                        "flags": {
                            "0": "volume"
                        },
                        "volume": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Pattern Recognition",
        "functions": [
            {
                "name": "CDL2CROWS",
                "group": "Pattern Recognition",
                "hint": "Two Crows",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3BLACKCROWS",
                "group": "Pattern Recognition",
                "hint": "Three Black Crows",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3INSIDE",
                "group": "Pattern Recognition",
                "hint": "Three Inside Up/Down",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3LINESTRIKE",
                "group": "Pattern Recognition",
                "hint": "Three-Line Strike ",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3OUTSIDE",
                "group": "Pattern Recognition",
                "hint": "Three Outside Up/Down",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3STARSINSOUTH",
                "group": "Pattern Recognition",
                "hint": "Three Stars In The South",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDL3WHITESOLDIERS",
                "group": "Pattern Recognition",
                "hint": "Three Advancing White Soldiers",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLABANDONEDBABY",
                "group": "Pattern Recognition",
                "hint": "Abandoned Baby",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.3,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLADVANCEBLOCK",
                "group": "Pattern Recognition",
                "hint": "Advance Block",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLBELTHOLD",
                "group": "Pattern Recognition",
                "hint": "Belt-hold",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLBREAKAWAY",
                "group": "Pattern Recognition",
                "hint": "Breakaway",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLCLOSINGMARUBOZU",
                "group": "Pattern Recognition",
                "hint": "Closing Marubozu",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLCONCEALBABYSWALL",
                "group": "Pattern Recognition",
                "hint": "Concealing Baby Swallow",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLCOUNTERATTACK",
                "group": "Pattern Recognition",
                "hint": "Counterattack",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLDARKCLOUDCOVER",
                "group": "Pattern Recognition",
                "hint": "Dark Cloud Cover",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.5,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLDOJI",
                "group": "Pattern Recognition",
                "hint": "Doji",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLDOJISTAR",
                "group": "Pattern Recognition",
                "hint": "Doji Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLDRAGONFLYDOJI",
                "group": "Pattern Recognition",
                "hint": "Dragonfly Doji",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLENGULFING",
                "group": "Pattern Recognition",
                "hint": "Engulfing Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLEVENINGDOJISTAR",
                "group": "Pattern Recognition",
                "hint": "Evening Doji Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.3,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLEVENINGSTAR",
                "group": "Pattern Recognition",
                "hint": "Evening Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.3,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLGAPSIDESIDEWHITE",
                "group": "Pattern Recognition",
                "hint": "Up/Down-gap side-by-side white lines",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLGRAVESTONEDOJI",
                "group": "Pattern Recognition",
                "hint": "Gravestone Doji",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHAMMER",
                "group": "Pattern Recognition",
                "hint": "Hammer",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHANGINGMAN",
                "group": "Pattern Recognition",
                "hint": "Hanging Man",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHARAMI",
                "group": "Pattern Recognition",
                "hint": "Harami Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHARAMICROSS",
                "group": "Pattern Recognition",
                "hint": "Harami Cross Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHIGHWAVE",
                "group": "Pattern Recognition",
                "hint": "High-Wave Candle",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHIKKAKE",
                "group": "Pattern Recognition",
                "hint": "Hikkake Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHIKKAKEMOD",
                "group": "Pattern Recognition",
                "hint": "Modified Hikkake Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLHOMINGPIGEON",
                "group": "Pattern Recognition",
                "hint": "Homing Pigeon",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLIDENTICAL3CROWS",
                "group": "Pattern Recognition",
                "hint": "Identical Three Crows",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLINNECK",
                "group": "Pattern Recognition",
                "hint": "In-Neck Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLINVERTEDHAMMER",
                "group": "Pattern Recognition",
                "hint": "Inverted Hammer",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLKICKING",
                "group": "Pattern Recognition",
                "hint": "Kicking",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLKICKINGBYLENGTH",
                "group": "Pattern Recognition",
                "hint": "Kicking - bull/bear determined by the longer marubozu",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLLADDERBOTTOM",
                "group": "Pattern Recognition",
                "hint": "Ladder Bottom",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLLONGLEGGEDDOJI",
                "group": "Pattern Recognition",
                "hint": "Long Legged Doji",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLLONGLINE",
                "group": "Pattern Recognition",
                "hint": "Long Line Candle",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLMARUBOZU",
                "group": "Pattern Recognition",
                "hint": "Marubozu",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLMATCHINGLOW",
                "group": "Pattern Recognition",
                "hint": "Matching Low",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLMATHOLD",
                "group": "Pattern Recognition",
                "hint": "Mat Hold",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.5,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLMORNINGDOJISTAR",
                "group": "Pattern Recognition",
                "hint": "Morning Doji Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.3,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLMORNINGSTAR",
                "group": "Pattern Recognition",
                "hint": "Morning Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInPenetration",
                        "displayName": "Penetration",
                        "defaultValue": 0.3,
                        "hint": "Percentage of penetration of a candle within another candle",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLONNECK",
                "group": "Pattern Recognition",
                "hint": "On-Neck Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLPIERCING",
                "group": "Pattern Recognition",
                "hint": "Piercing Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLRICKSHAWMAN",
                "group": "Pattern Recognition",
                "hint": "Rickshaw Man",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLRISEFALL3METHODS",
                "group": "Pattern Recognition",
                "hint": "Rising/Falling Three Methods",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSEPARATINGLINES",
                "group": "Pattern Recognition",
                "hint": "Separating Lines",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSHOOTINGSTAR",
                "group": "Pattern Recognition",
                "hint": "Shooting Star",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSHORTLINE",
                "group": "Pattern Recognition",
                "hint": "Short Line Candle",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSPINNINGTOP",
                "group": "Pattern Recognition",
                "hint": "Spinning Top",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSTALLEDPATTERN",
                "group": "Pattern Recognition",
                "hint": "Stalled Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLSTICKSANDWICH",
                "group": "Pattern Recognition",
                "hint": "Stick Sandwich",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLTAKURI",
                "group": "Pattern Recognition",
                "hint": "Takuri (Dragonfly Doji with very long lower shadow)",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLTASUKIGAP",
                "group": "Pattern Recognition",
                "hint": "Tasuki Gap",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLTHRUSTING",
                "group": "Pattern Recognition",
                "hint": "Thrusting Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLTRISTAR",
                "group": "Pattern Recognition",
                "hint": "Tristar Pattern",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLUNIQUE3RIVER",
                "group": "Pattern Recognition",
                "hint": "Unique 3 River",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLUPSIDEGAP2CROWS",
                "group": "Pattern Recognition",
                "hint": "Upside Gap Two Crows",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "CDLXSIDEGAP3METHODS",
                "group": "Pattern Recognition",
                "hint": "Upside/Downside Gap Three Methods",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outInteger",
                        "type": "integer",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Statistic Functions",
        "functions": [
            {
                "name": "BETA",
                "group": "Statistic Functions",
                "hint": "Beta",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 5,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "CORREL",
                "group": "Statistic Functions",
                "hint": "Pearson's Correlation Coefficient (r)",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal0",
                        "type": "real"
                    },
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal1",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 30,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "LINEARREG",
                "group": "Statistic Functions",
                "hint": "Linear Regression",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "LINEARREG_ANGLE",
                "group": "Statistic Functions",
                "hint": "Linear Regression Angle",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "LINEARREG_INTERCEPT",
                "group": "Statistic Functions",
                "hint": "Linear Regression Intercept",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "LINEARREG_SLOPE",
                "group": "Statistic Functions",
                "hint": "Linear Regression Slope",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "STDDEV",
                "group": "Statistic Functions",
                "hint": "Standard Deviation",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 5,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInNbDev",
                        "displayName": "Deviations",
                        "defaultValue": 1,
                        "hint": "Nb of deviations",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            },
            {
                "name": "TSF",
                "group": "Statistic Functions",
                "hint": "Time Series Forecast",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 14,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "VAR",
                "group": "Statistic Functions",
                "hint": "Variance",
                "inputs": [
                    {
                        "value": "",
                        "errorFlag": false,
                        "helperText": "",
                        "name": "inReal",
                        "type": "real"
                    }
                ],
                "optInputs": [
                    {
                        "name": "optInTimePeriod",
                        "displayName": "Time Period",
                        "defaultValue": 5,
                        "hint": "Number of period",
                        "type": "integer_range",
                        "errorFlag": false,
                        "helperText": ""
                    },
                    {
                        "name": "optInNbDev",
                        "displayName": "Deviations",
                        "defaultValue": 1,
                        "hint": "Nb of deviations",
                        "type": "real_range",
                        "errorFlag": false,
                        "helperText": ""
                    }
                ],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": true,
                "function_selected_flag": false
            }
        ]
    },
    {
        "group_name": "Price Transform",
        "functions": [
            {
                "name": "AVGPRICE",
                "group": "Price Transform",
                "hint": "Average Price",
                "inputs": [
                    {
                        "name": "inPriceOHLC",
                        "type": "price",
                        "flags": {
                            "0": "open",
                            "1": "high",
                            "2": "low",
                            "3": "close"
                        },
                        "open": "data key",
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "MEDPRICE",
                "group": "Price Transform",
                "hint": "Median Price",
                "inputs": [
                    {
                        "name": "inPriceHL",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low"
                        },
                        "high": "data key",
                        "low": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "TYPPRICE",
                "group": "Price Transform",
                "hint": "Typical Price",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            },
            {
                "name": "WCLPRICE",
                "group": "Price Transform",
                "hint": "Weighted Close Price",
                "inputs": [
                    {
                        "name": "inPriceHLC",
                        "type": "price",
                        "flags": {
                            "0": "high",
                            "1": "low",
                            "2": "close"
                        },
                        "high": "data key",
                        "low": "data key",
                        "close": "data key"
                    }
                ],
                "optInputs": [],
                "outputs": [
                    {
                        "0": "line",
                        "name": "outReal",
                        "type": "real",
                        "flags": {}
                    }
                ],
                "splitPane": false,
                "function_selected_flag": false
            }
        ]
    }
]