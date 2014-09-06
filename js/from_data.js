var empty_froms=[];
				
empty_froms[2]={
			"name_cn":"",
			"name_en":"",
			"from_type": "chimney",
			"device_id": "",
			"device_mode": "",
			"inspector":"",
			"device_photo":"",
			"items": [{
						
						"item_name_en": "Check the LED lamp by pressing the lamp test switch",
						"item_name_cn": "按測試開關並檢查LED燈",
						"index": 1,
						"cycle": 1,
						"group": "controller",
						"result": {"type" : "bool",
								   "value" : "false"
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
								   "exm_photos" : ["eximages/8.png"]
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
								   "unit" : "0~1MΩ",
								   "min_photos": 1,
								   "photos" : [],
								   "exm_photos" : ["eximages/9.png"]
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
								   }
					 },
					 {
						"item_name_en": "Starting / Running current  (A)",
						"item_name_cn": "開始/運行電流（A）",
						"index": 13,
						"cycle": 2,
						"group": "controller",
						"result": {"type" : "s_value",
								   "value" : "",
								   "unit" : "1.1~2.3A",
								   "min_photos": 1,
								   "photos" : [],
								   "exm_photos" : ["eximages/13.png"]
								   }
					 },{
						"item_name_en": "Test the MCB operation in the control panel",
						"item_name_cn": "測試控制箱中的MCB操作",
						"index": 14,
						"cycle": 2,
						"group": "controller",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Test the trip function",
						"item_name_cn": "測試跳閘功能",
						"index": 15,
						"cycle": 2,
						"group": "controller",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Inspect the electrical circuits and controls, tighten all electrical connection",
						"item_name_cn": "檢查電路和控制，擰緊所有的電氣連接",
						"index": 16,
						"cycle": 2,
						"group": "controller",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Check the flexible join of the exhaust Fan",
						"item_name_cn": "檢查排氣扇的軟連接",
						"index": 17,
						"cycle": 1,
						"group": "fan",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Check for any leakage on the chimmney connection",
						"item_name_cn": "檢查煙囪的連接是否有洩漏",
						"index": 18,
						"cycle": 1,
						"group": "fan",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Check the pressure of chimney",
						"item_name_cn": "檢查煙囪的壓力",
						"index": 19,
						"cycle": 2,
						"group": "chimney",
						"result": {"type" : "bool",
								   "value" : "false"
								   }
					 },{
						"item_name_en": "Check the surface temperature of Chimney ( °C )",
						"item_name_cn": "檢查的煙囪表面的溫度( °C )",
						"index": 19,
						"cycle": 2,
						"group": "chimney",
						"result": {"type" : "s_value",
								   "value" : "",
								   "unit" : "A"
								   }
					 }
					]
		};	
		empty_froms[2].catalogs=["controller","fan","chimney"];