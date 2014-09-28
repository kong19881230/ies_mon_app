var empty_froms=[];


empty_froms[0]={
	"name_cn":"",
	"name_en":"",
	"from_type": "heat",
	"device_id": "",
	"device_model": "",
	"inspector":"",
	"device_photo":"",
	"remark":[],
	"exm_photos" : ["eximages/0_device.png"],
	"items": [{

		"item_name_en": "Check the LED lamp by pressing the lamp test switch",
		"item_name_cn": "按測試開關並檢查LED燈",
		"index": 1,
		"cycle": 1,
		"group": "controller",
		"result": {"type" : "bool",
					"value" : "false"
				},
		"customers":{
						"1":{"cycle": 1},
						"3":{"cycle": 1},
						"4":{"cycle": 1}
	}
},
{
	"item_name_en": "Check for any abnormal noises inside the control panels",
	"item_name_cn": "檢查控制箱內的任何異常聲音",
	"index": 2,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the emergency stop function",
	"item_name_cn": "檢查緊急停止功能",
	"index": 3,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check High temperature cut-out device",
	"item_name_cn": "檢查高溫斷路設備",
	"index": 4,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check Sequence of starting step and control",
	"item_name_cn": "檢查序列的起始步骤和控制",
	"index": 5,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check condition of electric contact of contactor, starter and control",
	"item_name_cn": "檢查電接點的接觸器，起動和控制的條件",
	"index": 6,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 2,
	"photos" : [],
	"exm_photos" : ["eximages/0_5_1.png","eximages/0_5_2.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the Manual mode control function",
	"item_name_cn": "檢查手動模式控制功能",
	"index": 7,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the Auto mode control function",
	"item_name_cn": "檢查自動模式控制功能",
	"index": 8,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Clean up control panels",
	"item_name_cn": "清理乾淨控制箱",
	"index": 9,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Insulation for circulation pump (Pri / Sec):  (MΩ)",
	"item_name_cn": "絕緣材料的循環泵",
	"index": 10,
	"cycle": 1,
	"group": "pump",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["MΩ","MΩ"],
	"hint" : ["0~1","1~2"],
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/0_9.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Running current for circulation pump (Pri / Sec):  (A)",
	"item_name_cn": "循環泵運行電流",
	"index": 11,
	"cycle": 2,
	"group": "pump",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["Bar","Bar"],
	"hint" : ["0~1","1~2"],
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/0_10.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the temperature of all calorifiers; (℃)",
	"item_name_cn": "檢查所有的熱水器的溫度; (℃) ",
	"index": 12,
	"cycle": 1,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["℃","℃"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Confirm the temperature of the calorifiers with the temperature controller;",
	"item_name_cn": "確認溫控器的換熱溫度",
	"index": 13,
	"cycle": 1,
	"group": "heat",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check and record the Temp. of Plate heat Exchanger; (Pri. In / Pri. Out) (℃)",
	"item_name_cn": "檢查並記錄板式換熱器的溫度(熱水側入水/出水) (℃)",
	"index": 14,
	"cycle": 2,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["℃","℃"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check and record the Temp. of Plate heat Exchanger; (Sec. In / Sec. Out) (℃)",
	"item_name_cn": "檢查并記錄板式換熱器的溫度(冷水側入水/出水) (℃)",
	"index": 15,
	"cycle": 2,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["℃","℃"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check and record the pressure of the calorifier (Bar)",
	"item_name_cn": "檢查並記錄換熱的壓力",
	"index": 16,
	"cycle": 2,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["Bar","Bar"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}	
},{
	"item_name_en": "Check and record the pressure of Plate heat Exchanger; (Pri. In / Pri. Out) (Bar)",
	"item_name_cn": "檢查並記錄下壓板式換熱器(熱水側入水/出水)(Bar)",
	"index": 17,
	"cycle": 2,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["Bar","Bar"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}	
},{
	"item_name_en": "Check and record the pressure of Plate heat Exchanger; (Sec. In / Sec. Out) (Bar)",
	"item_name_cn": "檢查並記錄下壓板式換熱器(冷水側入水/出水) (Bar)",
	"index": 18,
	"cycle": 2,
	"group": "heat",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["Bar","Bar"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}	
},{
	"item_name_en": "Check the main switch operation of control",
	"item_name_cn": "檢查主開關的操作控制",
	"index": 19,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Test the MCB operation in the control panel",
	"item_name_cn": "測試電控箱中的MCB的操作",
	"index": 20,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Check the pressure gauge and thermometer",
	"item_name_cn": "檢查壓力表和溫度計",
	"index": 21,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Inspect the electrical circuits and controls, tighten all electrical connection",
	"item_name_cn": "檢查電路和控制，擰緊所有的電氣連接",
	"index": 22,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Check tightness of bolted, nuts, tighten if necessary",
	"item_name_cn": "檢查用螺栓和螺母的緊固程度，如有必要，擰緊其螺栓和螺母",
	"index": 23,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Perform monthly services",
	"item_name_cn": "進行月檢服務",
	"index": 24,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Check for all flexible connection for leakage",
	"item_name_cn": "檢查所有軟連接是否有洩漏",
	"index": 25,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6}
}
},{
	"item_name_en": "Clening of Plates. Segregation for cleaning Plates to avoid corrosion resistance exists.",
	"item_name_cn": "清洗板片,隔離已清潔的板片，以避免耐腐蝕存在",
	"index": 26,
	"cycle": 12,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"3":{"cycle": 12},
					"4":{"cycle": 12}
}
},{
	"item_name_en": "Dismantle to clean the heat exchanger",
	"item_name_cn": "拆卸及清洗換熱交換器",
	"index": 27,
	"cycle": 12,
	"group": "heat",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"1":{"cycle": 12}
}
},{
	"item_name_en": "Replace the NBR gasket if necessary",
	"item_name_cn": "如有必要，更換NBR膠墊",
	"index": 28,
	"cycle": 12,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"1":{"cycle": 12}
}
}
]
};	

empty_froms[1]={
	"name_cn":"",
	"name_en":"",
	"from_type": "boiler",
	"device_id": "",
	"device_model": "",
	"inspector":"",
	"remark":[],
	"device_photo":"",
	"exm_photos" : ["eximages/1_device.png"],
	"items": [{
	"item_name_en": "Record and check the boiler runing time (h)",
	"item_name_cn": "記錄及檢查鍋爐運行時間（小時)",
	"index": 1,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "h",
	"hint" : "43340"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}

},{

		"item_name_en": "Check boiler room safety situation",
		"item_name_cn": "檢查鍋爐房的安全情況",
		"index": 2,
		"cycle": 1,
		"group": "burner",
		"result": {"type" : "bool",
		"value" : "false"
	},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check boiler room O2 (vol%)",
	"item_name_cn": "檢查鍋爐房的氧氣含量 (体積百份比)",
	"index": 3,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "%",
	"hint" : "20~25"
},
	"customers":{
					"3":{"cycle": 1}
}
},
{
	"item_name_en": "Check boiler room CO (ppm) ",
	"item_name_cn": "檢查鍋爐房的一氧化碳含量 (ppm)",
	"index": 4,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "ppm",
	"hint" : "20~25"
},
	"customers":{
					"3":{"cycle": 1}
}
},{

		"item_name_en": "Check the air intake and exhaust vent pipes for broken seals at the joints",
		"item_name_cn": "檢查進氣和排氣的排氣管密封位置",
		"index": 5,
		"cycle": 1,
		"group": "fan",
		"result": {"type" : "bool",
		"value" : "false"
	},
	"customers":{
					"1":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the burner running status",
	"item_name_cn": "檢查燃燒器的運行狀態",
	"index": 6,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the air intake and exhaust vent outlets that no blockage or any restriction occur",
	"item_name_cn": "檢查進氣口和排氣口沒有堵塞或發生任何異常情況",
	"index": 7,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the condition of spark plug",
	"item_name_cn": "檢查火花塞的狀況",
	"index": 8,
	"cycle": 2,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the boiler combustion, adjusted to the highest performance operation",
	"item_name_cn": "檢查鍋爐燃燒的情況, 調整至最高效能的操作",
	"index": 9,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the unblocked or unrestricted drain pipe for the safety value",
	"item_name_cn": "檢查的安全閥或排水管的暢通情況",
	"index": 10,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check for any leaks in chimney exhaust piping",
	"item_name_cn": "檢查在煙囪排氣管道是否有洩漏",
	"index": 11,
	"cycle": 2,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the condition of motorized damper and the associated interlocking device",
	"item_name_cn": "檢查機動阻尼器和相關的聯鎖裝置",
	"index": 12,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the supply of LPG gas and associated control valve, pipe work and associated accessories",
	"item_name_cn": "檢查液化石油氣的供應和相關的控制閥，鍋爐房管道工程及相關配件",
	"index": 13,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check all the safety control and associated devices (such as safety shut-off valves, governors, thermostats, etc)",
	"item_name_cn": "檢查所有的安全控制和相關設備（如安全切斷閥，調速器，溫控器，空氣壓力開關等）",
	"index": 14,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 9,
	"photos" : [],
	"exm_photos" : ["eximages/1_16_1.png","eximages/1_16_2.png","eximages/1_16_3.png,eximages/1_16_4.png","eximages/1_16_5.png","eximages/1_16_6.png,eximages/1_16_7.png","eximages/1_16_8.png","eximages/1_16_9.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the condition of isolating valves, gas burners, nozzles and governor",
	"item_name_cn": "檢查隔離閥，燃燒器，噴嘴，調節器）",
	"index": 15,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
	
},
	"customers":{
					"1":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the correct rotation of the feed pump, the casings are purged of air and that the feed pump motors are not overloaded and adjust if necessary",
	"item_name_cn": "檢查正確的進氣摩打的旋轉方向，進氣摩打沒有過載，必要時調整",
	"index": 16,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the associated boiler booster fan interlock",
	"item_name_cn": "檢查相關的鍋爐增壓風機聯鎖",
	"index": 17,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check control logic; (Cut off & start up temp.)",
	"item_name_cn": "檢查控制邏輯 (開始及切斷溫度)",
	"index": 18,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Reocord and check the temperature of supply water; ( °C )",
	"item_name_cn": "檢查及記錄供水溫度（°C）",
	"index": 19,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Record the supply gas pressure; (mbar)",
	"item_name_cn": "檢查及記錄石油氣氣壓 (mbar） ",
		"index": 20,
		"cycle": 1,
		"group": "boiler",
		"result": {"type" : "s_value",
		"value" : "",
		"unit" : "mbar",
		"hint" : "100~120"
	},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the boilers primary side water temperature setpoint",
	"item_name_cn": "檢查第一循鍋爐水的溫度設定狀態",
	"index": 21,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the ignition electrodes and sensors",
	"item_name_cn": "檢查點火電極和傳感器",
	"index": 22,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the burner flame status",
	"item_name_cn": "檢查燃燒器火焰的狀態",
	"index": 23,
	"cycle": 1,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the blower motor",
	"item_name_cn": "檢查鼓風機電機",
	"index": 24,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the flue gas status",
	"item_name_cn": "檢查煙囪氣體狀態",
	"index": 25,
	"cycle": 2,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Record the flue gas temperature; ( °C )",
	"item_name_cn": "記錄的煙囪氣體的溫度( °C )",
	"index": 26,
	"cycle": 2,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}

},{
	"item_name_en": "Check the 1st. State temp. cut off function",
	"item_name_cn": "檢查第一价段溫度切斷功能",
	"index": 27,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "The 1st. State cut off temperature setting; ( °C )",
	"item_name_cn": "第一价段溫度切斷溫度設定 ( °C )",
	"index": 28,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check and adjust Air - LPG ratio",
	"item_name_cn": "檢查及調整空氣 - 液化石油氣的比例",
	"index": 29,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 3,
	"photos" : [],
	"exm_photos" : ["eximages/1_14_1.png","eximages/1_14_2.png","eximages/1_14_3.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check and adjust the burner blower damper",
	"item_name_cn": "檢查和調整燃燒器風機風門",
	"index": 30,
	"cycle": 2,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Current of the burner motor;  (Start / Running) (A)",
	"item_name_cn": "燃燒器電機電流(開始/運行) (A)",
	"index": 31,
	"cycle": 2,
	"group": "burner",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["A","A"],
	"hint" : ["0~1","1~2"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the manual mode control function",
	"item_name_cn": "檢查手動模式控制功能",
	"index": 32,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Clean up boiler and control panel; keep clean of boiler plant room",
	"item_name_cn": "清理鍋爐和控制箱, 保持機房清潔",
	"index": 33,
	"cycle": 2,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}

},{
	"item_name_en": "Chemical Water Treatment for Boiler System (Adding Polymer Sludge Conditioner for heating Water System), purchase and refill Polymer Sludge Conditioner ",
	"item_name_cn": "對鍋爐水化學處理系統",
	"index": 34,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 1}
}

},{
	"item_name_en": "Perform Boiler Water Control and Water chemical examination in PH Value, Total Dissolved Solids, Total Hardness (as CaCO3), Total Tron (as Fe), Chloride (as Cl-), M-Alkalinity (as CaCO3), Polytan 4 FC",
	"item_name_cn": "執行鍋爐水控制和水化學測試在PH值、總溶解固體,總硬度(碳酸鈣)、總特隆(Fe)、氯(Cl -),m鹼度(碳酸鈣)",
	"index": 35,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 1}
}

},{
	"item_name_en": "Perform th flue gas analysis",
	"item_name_cn": "執行煙氣分析測驗",
	"index": 36,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "none",
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}

},{
	"item_name_en": "a. CO2 (vol%)",
	"item_name_cn": "二氧化碳 (体積百份比)",
	"index": 37,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}

},{
	"item_name_en": "b. CO (ppm)",
	"item_name_cn": "一氧化碳 (每百萬份)",
	"index": 38,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "ppm",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}

},{
	"item_name_en": "c. O2 (vol%)",
	"item_name_cn": "氧氣 (体積百份比)",
	"index": 39,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1}
}

},
{
	"item_name_en": "Clean and Check the condition of isolating valves, gas burners, nozzles and governor",
	"item_name_cn": "檢查及清洗隔離閥，燃燒器，噴嘴",
	"index": 40,
	"cycle": 2,
	"group": "burner",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 6,
	"photos" : [],
	"exm_photos" : ["eximages/1_7_1.png","eximages/1_7_2.png","eximages/1_7_3.png","eximages/1_7_4.png","eximages/1_7_5.png","eximages/1_7_6.png"]
},
	"customers":{
					
					"3":{"cycle": 2}
}
},{
	"item_name_en": "Check the low water level sensor; (low water cut off)",
	"item_name_cn": "檢查低水位傳感器;（當低水位時切斷)",
"index": 41,
"cycle": 1,
"group": "controller",
"result": {"type" : "bool",
"value" : "false",
"min_photos": 2,
"photos" : [],
"exm_photos" : ["eximages/1_19_1.png","eximages/1_19_2.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 3}
}
},{
	"item_name_en": "Check the high pressure cut off protection",
	"item_name_cn": "檢查高壓切斷保護功能",
	"index": 42,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/1_18.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 3}
}
},
{
	"item_name_en": "Boiler efficiency (%)",
	"item_name_cn": "鍋爐效率 (%)",
	"index": 43,
	"cycle": 1,
	"group": "boiler",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "%",
	"hint" : "90~100"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 1},
					"4":{"cycle": 6}
}
},{
	"item_name_en": "Lubricate the modulation motor arms, gas and exhaust butterfly valves",
	"item_name_cn": "潤滑電機機械臂，燃氣和排氣蝶閥",
	"index": 44,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "General cleaning of the flapper valves and associated accessories",
	"item_name_cn": "清潔插板閥及相關配件",
	"index": 45,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6}
}

},{
	"item_name_en": "General cleaning of the water temperature sensor and associated accessories",
	"item_name_cn": "清潔水溫度傳感器及相關配件",
	"index": 46,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Clean / Replace the spark plug and associated accessories",
	"item_name_cn": "清潔/更換火花塞及相關配件",
	"index": 47,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Clean / Replace flapper valves and associated accessories",
	"item_name_cn": "清潔/更換擋板閥及相關配件",
	"index": 48,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Clean / Replace the water temperature sensor (cut-off) and associated accessories",
	"item_name_cn": "清潔/更換水溫傳感器（切斷）及相關配",
	"index": 49,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6}
}

},{
	"item_name_en": "Check the 2nd. State temp. cut off function",
	"item_name_cn": "檢查第二价段高溫切斷功能",
	"index": 50,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "The 2nd. State high temperature cut off setting; ( °C )",
	"item_name_cn": "第二价段高溫切斷溫度設定",
	"index": 51,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Check the surface temperature of boiler; ( °C )",
	"item_name_cn": "檢查鍋爐的表面溫度 ( °C )",
	"index": 52,
	"cycle": 6,
	"group": "boiler",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Check the surface temperature of flue; ( °C )",
	"item_name_cn": "檢查的煙道表面的溫度( °C )",
	"index": 53,
	"cycle": 6,
	"group": "fan",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Check the pressure sensor and gauge",
	"item_name_cn": "檢查壓力傳感器和儀表功能",
	"index": 54,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6},
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Water analysis report from an accredited laboratory",
	"item_name_cn": "水質分析報告，由認可的實驗室進行",
	"index": 55,
	"cycle": 6,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 6}
}

},{
	"item_name_en": "Check the safety relief valve",
	"item_name_cn": "檢查安全閥功能",
	"index": 56,
	"cycle": 6,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 6},
					"3":{"cycle": 6}
}

},{
	"item_name_en": "Inspect by oversea inspector for safety inspection",
	"item_name_cn": "由檢查員進行安全檢查",
	"index": 57,
	"cycle": 12,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 12}	
}

},{
	"item_name_en": "Inspect by oversea inspector for safety inspection",
	"item_name_cn": "第三方專業鍋爐撿測的承辨商進行檢測",
	"index": 58,
	"cycle": 12,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"4":{"cycle": 12}
}

},{
	"item_name_en": "Overall inspect and clean the combustion chamber and flue pipes",
	"item_name_cn": "總體檢查和清理燃燒室和煙道",
	"index": 59,
	"cycle": 12,
	"group": "boiler",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 12},
					"3":{"cycle": 12}
}

}
]
};				
empty_froms[2]={
	"name_cn":"",
	"name_en":"",
	"from_type": "chimney",
	"device_id": "",
	"device_model": "",
	"remark":[],
	"inspector":"",
	"device_photo":"",
	"exm_photos" : ["eximages/2_device.png"],
	"items": [{

		"item_name_en": "Check the LED lamp by pressing the lamp test switch",
		"item_name_cn": "按測試開關並檢查LED燈",
		"index": 1,
		"cycle": 1,
		"group": "controller",
		"result": {"type" : "bool",
		"value" : "false"
	},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check for any abnormal noises inside the control panels",
	"item_name_cn": "檢查控制箱內的任何異常聲音",
	"index": 2,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the emergency stop function",
	"item_name_cn": "檢查緊急停止功能",
	"index": 3,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the Interlock function with related boiler",
	"item_name_cn": "檢查相關於鍋爐的聯鎖功能",
	"index": 4,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the Manual mode control function",
	"item_name_cn": "檢查手動模式控制功能",
	"index": 5,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the Auto mode control function",
	"item_name_cn": "檢查自動模式控制功能",
	"index": 6,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the main switch operation of control",
	"item_name_cn": "檢查主開關的操作控制",
	"index": 7,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check for all flexible connection for leakage",
	"item_name_cn": "檢查所有軟連接是否有洩漏",
	"index": 8,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false",
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/2_8.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Insulation;   (MΩ)",
	"item_name_cn": "絕緣度（MΩ）",
	"index": 9,
	"cycle": 1,
	"group": "controller",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "MΩ",
	"hint" : "0~1",
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/2_9.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check condition of electric contact of contactor, starter and control",
	"item_name_cn": "檢查電接點的接觸器，起動和控制的條件",
	"index": 10,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Check the function of the control value",
	"item_name_cn": "檢查控制閥的功能",
	"index": 11,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Clean up control panels",
	"item_name_cn": "清理乾淨控制箱",
	"index": 12,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},
{
	"item_name_en": "Starting / Running current  (A)",
	"item_name_cn": "開始/運行電流（A）",
	"index": 13,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "d_value",
	"value" : ["",""],
	"unit" : ["A","A"],
	"hint" : ["0~1","1~2"],
	"min_photos": 1,
	"photos" : [],
	"exm_photos" : ["eximages/2_13.png"]
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Test the MCB operation in the control panel",
	"item_name_cn": "測試控制箱中的MCB操作",
	"index": 14,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Test the trip function",
	"item_name_cn": "測試跳閘功能",
	"index": 15,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Inspect the electrical circuits and controls, tighten all electrical connection",
	"item_name_cn": "檢查電路和控制，擰緊所有的電氣連接",
	"index": 16,
	"cycle": 2,
	"group": "controller",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the flexible join of the exhaust Fan",
	"item_name_cn": "檢查排氣扇的軟連接",
	"index": 17,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check for any leakage on the chimmney connection",
	"item_name_cn": "檢查煙囪的連接是否有洩漏",
	"index": 18,
	"cycle": 1,
	"group": "fan",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					
					"3":{"cycle": 1},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the pressure of chimney",
	"item_name_cn": "檢查煙囪的壓力",
	"index": 19,
	"cycle": 2,
	"group": "chimney",
	"result": {"type" : "bool",
	"value" : "false"
},
	"customers":{
					"1":{"cycle": 1},
					"3":{"cycle": 2},
					"4":{"cycle": 1}
}
},{
	"item_name_en": "Check the surface temperature of Chimney ( °C )",
	"item_name_cn": "檢查的煙囪表面的溫度( °C )",
	"index": 19,
	"cycle": 2,
	"group": "chimney",
	"result": {"type" : "s_value",
	"value" : "",
	"unit" : "°C",
	"hint" : "20~25"
},
	"customers":{
					
					"3":{"cycle": 2},
}
}
]
};	

empty_froms[0].catalogs=["controller","pump","heat"];
empty_froms[1].catalogs=["burner","boiler","controller","fan"];
empty_froms[2].catalogs=["controller","fan","chimney"];

var customers= [
{ 	"id" : "1",
"name_cn" : "十六浦",
"name_en" : "Ponte 16 Resort Macau",
"seq" :"MM-0608020-10",
"created_at" :"2014-06-09 23:27:35",
"cycles":[{ 	"value": "1",
"name_cn": "月檢",
"name_en": "Monthly"

},{ 	"value": "6",
"name_cn": "半年檢",
"name_en": "Semi-Annually"

},{ 	"value": "12",
"name_cn": "年檢",
"name_en": "Annually"

}],
"catalogs":["heat","boiler","chimney"]
},
{ 	"id": "2",
"name_cn": "蘭桂坊",
"name_en": "Lan Kwai Fong",
"seq":"MM-LM-10007-11",
"created_at": "2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
},
{ 	"id": "3",
"name_cn": "凱旋門",
"name_en": "L'Arc Macau",
"seq": "MM-0606014-05",
"created_at": "2014-06-09 23:27:35",
"cycles":[{ 	"value": "1",
"name_cn": "月檢",
"name_en": "Monthly"

},{ 	"value": "2",
"name_cn": "雙月檢",
"name_en": "Even Monthly"

},{ 	"value": "6",
"name_cn": "半年檢",
"name_en": "Semi-Annually"

},{ 	"value": "12",
"name_cn": "年檢",
"name_en": "Annually"

}],
"catalogs":["heat","boiler","chimney"]
},
{ 	"id": "4",
"name_cn": "新葡京",
"name_en": "Grand Lisboa",
"seq":"MM-0406012-04",
"created_at":"2014-06-09 23:27:35",
"cycles":[{ 	"value": "1",
"name_cn": "月檢",
"name_en": "Monthly"

},{ 	"value": "3",
"name_cn": "季度檢",
"name_en": "Quarterly"

},{ 	"value": "6",
"name_cn": "半年檢",
"name_en": "Semi-Annually"

},{ 	"value": "12",
"name_cn": "年檢",
"name_en": "Annually"

}],
"catalogs":["heat","boiler","chimney"]
},
{ 	"id": "5",
"name_cn": "金沙",
"name_en": "Sands Macau",
"seq":"MM-0603005-02",
"created_at":"2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
},
{ 	"id": "6",
"name_cn": "星際",
"name_en": "Star World",
"seq":"MM_LM-100903-12",
"created_at":"2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
},
{ 	"id": "7",
"name_cn": "四季",
"name_en": "Four Season Hotel",
"seq":"MM_LM-100903-12",
"created_at":"2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
},
{ 	"id": "8",
"name_cn": "威尼斯人一期",
"name_en": "Venetian Cotai",
"seq": "MM-0505001-15",
"created_at": "2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
},
{ 	"id": "9",
"name_cn": "威尼斯人5,6期",
"name_en": "Sands Cotai",
"seq": "MM-0601006-17",
"created_at": "2014-06-09 23:27:35",
"cycles":[],
"catalogs":[]
}
];

var cycles=[{ 	"value": "1",
"name_cn": "月檢",
"name_en": "Monthly"

},{ 	"value": "2",
"name_cn": "雙月檢",
"name_en": "Even Monthly"

},{ 	"value": "3",
"name_cn": "季度檢",
"name_en": "Quarterly"

},{ 	"value": "6",
"name_cn": "半年檢",
"name_en": "Semi-Annually"

},{ 	"value": "12",
"name_cn": "年檢",
"name_en": "Annually"

}];