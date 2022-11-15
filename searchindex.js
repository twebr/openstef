Search.setIndex({docnames:["about_openstef","api_reference","community","concepts","dashboard","dazls","index","modules","openstef","openstef.data_classes","openstef.feature_engineering","openstef.metrics","openstef.model","openstef.model.metamodels","openstef.model.regressors","openstef.model_selection","openstef.monitoring","openstef.pipeline","openstef.postprocessing","openstef.preprocessing","openstef.tasks","openstef.tasks.utils","openstef.validation","pipelines_user_guide","user_guides"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["about_openstef.rst","api_reference.rst","community.rst","concepts.rst","dashboard.rst","dazls.rst","index.rst","modules.rst","openstef.rst","openstef.data_classes.rst","openstef.feature_engineering.rst","openstef.metrics.rst","openstef.model.rst","openstef.model.metamodels.rst","openstef.model.regressors.rst","openstef.model_selection.rst","openstef.monitoring.rst","openstef.pipeline.rst","openstef.postprocessing.rst","openstef.preprocessing.rst","openstef.tasks.rst","openstef.tasks.utils.rst","openstef.validation.rst","pipelines_user_guide.rst","user_guides.rst"],objects:{"":[[8,0,0,"-","openstef"]],"openstef.data_classes":[[9,0,0,"-","model_specifications"]],"openstef.data_classes.model_specifications":[[9,1,1,"","ModelSpecificationDataClass"]],"openstef.data_classes.model_specifications.ModelSpecificationDataClass":[[9,2,1,"","feature_modules"],[9,2,1,"","feature_names"],[9,2,1,"","hyper_params"],[9,2,1,"","id"]],"openstef.enums":[[8,1,1,"","ForecastType"],[8,1,1,"","MLModelType"],[8,1,1,"","TracyJobResult"]],"openstef.enums.ForecastType":[[8,2,1,"","BASECASE"],[8,2,1,"","DEMAND"],[8,2,1,"","SOLAR"],[8,2,1,"","WIND"]],"openstef.enums.MLModelType":[[8,2,1,"","LGB"],[8,2,1,"","LINEAR"],[8,2,1,"","ProLoaf"],[8,2,1,"","XGB"],[8,2,1,"","XGB_QUANTILE"]],"openstef.enums.TracyJobResult":[[8,2,1,"","FAILED"],[8,2,1,"","SUCCESS"],[8,2,1,"","UNKNOWN"]],"openstef.exceptions":[[8,3,1,"","ComponentForecastTooShortHorizonError"],[8,3,1,"","InputDataInsufficientError"],[8,3,1,"","InputDataInvalidError"],[8,3,1,"","InputDataWrongColumnOrderError"],[8,3,1,"","ModelWithoutStDev"],[8,3,1,"","NoPredictedLoadError"],[8,3,1,"","NoRealisedLoadError"],[8,3,1,"","OldModelHigherScoreError"],[8,3,1,"","PredictionJobException"]],"openstef.model":[[12,0,0,"-","basecase"],[12,0,0,"-","fallback"],[13,0,0,"-","metamodels"],[14,0,0,"-","regressors"],[12,0,0,"-","standard_deviation_generator"]],"openstef.model.basecase":[[12,1,1,"","BaseCaseModel"]],"openstef.model.basecase.BaseCaseModel":[[12,4,1,"","can_predict_quantiles"],[12,5,1,"","fit"],[12,5,1,"","make_basecase_forecast"],[12,5,1,"","predict"]],"openstef.model.fallback":[[12,6,1,"","generate_fallback"]],"openstef.model.metamodels":[[13,0,0,"-","missing_values_handler"]],"openstef.model.metamodels.missing_values_handler":[[13,1,1,"","MissingValuesHandler"]],"openstef.model.metamodels.missing_values_handler.MissingValuesHandler":[[13,2,1,"","feature_importances_"],[13,2,1,"","feature_names"],[13,5,1,"","fit"],[13,2,1,"","imputer_"],[13,2,1,"","n_features_in_"],[13,2,1,"","non_null_columns_"],[13,2,1,"","pipeline_"],[13,5,1,"","predict"],[13,2,1,"","regressor_"]],"openstef.model.regressors":[[14,0,0,"-","dazls"],[14,0,0,"-","lgbm"],[14,0,0,"-","linear"],[14,0,0,"-","regressor"],[14,0,0,"-","xgb"]],"openstef.model.regressors.dazls":[[14,1,1,"","Dazls"]],"openstef.model.regressors.dazls.Dazls":[[14,5,1,"","fit"],[14,5,1,"","predict"],[14,5,1,"","score"]],"openstef.model.regressors.lgbm":[[14,1,1,"","LGBMOpenstfRegressor"]],"openstef.model.regressors.lgbm.LGBMOpenstfRegressor":[[14,4,1,"","can_predict_quantiles"],[14,4,1,"","feature_names"],[14,2,1,"","gain_importance_name"],[14,2,1,"","weight_importance_name"]],"openstef.model.regressors.linear":[[14,1,1,"","LinearOpenstfRegressor"],[14,1,1,"","LinearRegressor"]],"openstef.model.regressors.linear.LinearOpenstfRegressor":[[14,4,1,"","can_predict_quantiles"],[14,4,1,"","feature_names"],[14,5,1,"","fit"]],"openstef.model.regressors.regressor":[[14,1,1,"","OpenstfRegressor"]],"openstef.model.regressors.regressor.OpenstfRegressor":[[14,4,1,"","can_predict_quantiles"],[14,4,1,"","feature_names"],[14,5,1,"","fit"],[14,5,1,"","predict"],[14,5,1,"","score"],[14,5,1,"","set_feature_importance"]],"openstef.model.regressors.xgb":[[14,1,1,"","XGBOpenstfRegressor"]],"openstef.model.regressors.xgb.XGBOpenstfRegressor":[[14,4,1,"","can_predict_quantiles"],[14,4,1,"","feature_names"],[14,2,1,"","gain_importance_name"],[14,2,1,"","weight_importance_name"]],"openstef.model.standard_deviation_generator":[[12,1,1,"","StandardDeviationGenerator"]],"openstef.model.standard_deviation_generator.StandardDeviationGenerator":[[12,5,1,"","generate_standard_deviation_data"]],"openstef.monitoring":[[16,0,0,"-","performance_meter"],[16,0,0,"-","teams"]],"openstef.monitoring.performance_meter":[[16,1,1,"","PerformanceMeter"]],"openstef.monitoring.performance_meter.PerformanceMeter":[[16,5,1,"","checkpoint"],[16,5,1,"","complete_level"],[16,5,1,"","start_level"]],"openstef.monitoring.teams":[[16,6,1,"","build_sql_query_string"],[16,6,1,"","format_message"],[16,6,1,"","get_card_section"],[16,6,1,"","post_teams"]],"openstef.preprocessing":[[19,0,0,"-","preprocessing"]],"openstef.preprocessing.preprocessing":[[19,6,1,"","replace_repeated_values_with_nan"]],"openstef.tasks":[[21,0,0,"-","utils"]],"openstef.tasks.utils":[[21,0,0,"-","taskcontext"]],"openstef.tasks.utils.taskcontext":[[21,1,1,"","TaskContext"]],"openstef.validation":[[22,0,0,"-","validation"]],"openstef.validation.validation":[[22,6,1,"","calc_completeness"],[22,6,1,"","check_data_for_each_trafo"],[22,6,1,"","drop_target_na"],[22,6,1,"","find_nonzero_flatliner"],[22,6,1,"","find_zero_flatliner"],[22,6,1,"","is_data_sufficient"],[22,6,1,"","validate"]],openstef:[[9,0,0,"-","data_classes"],[8,0,0,"-","enums"],[8,0,0,"-","exceptions"],[10,0,0,"-","feature_engineering"],[11,0,0,"-","metrics"],[12,0,0,"-","model"],[15,0,0,"-","model_selection"],[16,0,0,"-","monitoring"],[17,0,0,"-","pipeline"],[18,0,0,"-","postprocessing"],[19,0,0,"-","preprocessing"],[20,0,0,"-","tasks"],[22,0,0,"-","validation"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","property","Python property"],"5":["py","method","Python method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:property","5":"py:method","6":"py:function"},terms:{"0":[6,12,13,14,22],"001":14,"05":[3,5],"1":[14,22],"100":14,"14d":12,"2":[3,5,6],"20":14,"200000":14,"2013":0,"30":8,"31":14,"48":12,"543":0,"7d":12,"abstract":14,"case":0,"class":[8,9,12,13,14,16,21,23],"default":[13,14,16,21],"enum":[1,7],"final":[3,5],"float":[13,14,22,23],"function":[3,5,14,16,22,23],"import":[2,3,5,13,14,22,23],"int":[9,12,13,14,19,22,23],"new":[0,3,8,16],"public":6,"return":[12,13,14,16,19,22,23],"short":6,"static":12,"true":[16,21,22],A:[0,3,5,8,13,14,21,23],As:[0,23],At:[3,5],For:[0,2,3,5,12,13,14,16,24],IT:0,If:[2,3,12,13,14,21,22],In:[14,23],Is:[3,5],It:[3,5,6,13],Near:[3,5,14],No:[0,8],Not:2,One:[8,16],Or:2,TO:[3,5],The:[0,2,3,5,6,12,13,14,16,22,23,24],Then:[3,5,14],These:23,To:23,With:0,__file__:23,__main__:23,__name__:23,about:[2,3,5,6],abov:[19,22,24],absolut:23,abstractmethod:14,accord:23,action:[3,16],actual:2,ad:12,adapt:[6,14],adaptation_model_input:14,adaptation_model_input_column:14,adaptation_model_test_data:14,addapt:0,addit:23,addition:23,adher:14,advanc:8,after:[14,22],again:[3,5],agnost:0,aim:24,all:[0,2,3,6,9,12,13,14,22],along:[13,14],also:[6,16,23],alwai:0,ambit:2,amount:22,an:[0,2,3,5,8,13,21,23,24],ani:[0,14,16,21,23,24],anticip:0,anyon:2,anyth:22,apart:[23,24],api:[0,3,6,14,23],appear:22,append:16,applic:[0,23],apply_featur:[1,7,8],approach:[3,5],ar:[2,3,5,6,12,14,16,19,22,23,24],architectur:[0,2,24],arguabl:23,argument:21,around:23,arrai:[14,22],asset:0,assort:24,attribut:14,authent:16,autom:[0,14],automat:21,avail:[0,6,8,12,14,22,24],aw:3,back:12,backtest:24,balanc:0,base:[0,3,8,9,12,13,14,16,21],base_estim:13,basecas:[1,7,8,23],basecase_forecast_pipelin:23,basecasemodel:12,baseestim:[12,13,14],basemodel:9,becaus:[3,5],been:14,befor:[12,22],being:[3,5],bellow:[3,5],below:23,between:[12,22],bi:2,big:22,block:22,bogaard:2,bool:[14,16,21,22],boosting_typ:14,both:[0,14,23],bug:2,build:[3,16],build_sql_query_str:16,button:16,c:[3,5,14],calc_complet:22,calcul:[12,22],calculate_kpi:[1,7,8],call:[3,21],callabl:21,callback:21,can:[0,2,3,5,6,13,14,16,21,22,23,24],can_predict_quantil:[12,14],capac:0,card:16,cardsect:16,carri:[3,5,14],cd:3,certain:[3,23],chain:13,challeng:0,chang:[3,5],channel:[2,6],check:[3,22],check_data_for_each_trafo:22,checkpoint:16,choic:2,choos:3,ci:3,cicd:3,class_weight:14,clean:22,cloud:0,code:[2,3,5,23,24],code_of_conduct:6,coeffici:16,coefficients_df:16,col:22,color:16,colsample_bytre:14,column:[8,12,13,14,19,22,23],column_nam:19,com:[16,24],comat:12,combin:[0,3,5],commis:0,common:14,commun:6,compat:[0,22],compens:22,complet:[0,3,5,13,16,21,22],complete_level:16,completeness_threshold:22,complex:16,compon:[0,3,5,6,8,14],componentforecasttooshorthorizonerror:8,comput:3,concept:[6,23,24],concret:14,confidence_interval_appl:[1,7,8],config:[3,21,23],configmanag:23,configur:[3,21],configure_log:23,congest:0,connect:23,connector:[16,23],consid:22,consist:2,constant:[13,14],constraint:0,consumpt:0,contain:[0,3,6,14,16,22,23,24],container:0,content:[1,7],context:21,continu:22,convert:[13,14],correct:22,correspond:3,could:[16,22,24],count:22,creat:[3,16,24],create_basecase_forecast:[1,7,8,23,24],create_basecase_forecast_pipelin:23,create_component_forecast:[1,3,5,7,8,24],create_components_forecast:[1,7,8,23],create_forecast:[1,7,8,23,24],create_forecast_pipeline_cor:23,create_solar_forecast:[1,7,8],create_wind_forecast:[1,7,8],critic:0,cron:3,cronjob:23,current:[3,12,16],custom:8,custom_regressor:[8,12],dai:[0,12],daili:12,dashboard:[3,24],data:[0,3,5,8,9,12,13,14,19,22,23,24],data_class:[1,7,8,23],databas:[3,21,23,24],dataclass:9,datafram:[3,12,13,14,16,19,22,23],dataframa:22,datatim:8,datetim:[8,12,22],datetimeindex:22,david:2,dazl:[6,8,12],dazls_stor:[3,5],dbc:[3,21,23],decis:0,def:23,defin:[13,14],definit:[14,24],deliv:0,delta:22,demand:8,demonstr:[23,24],den:2,depend:[8,20],depict:[3,5],deploi:[0,3,5],deploy:0,depth:24,descript:22,design:23,desir:[12,19],detail:[2,6],detect:22,determin:12,develop:[2,3,5],deviat:8,df:[16,19,22],dict:[9,16,23],dictionari:16,differ:[12,22,23],difficult:0,direct:2,directli:[0,3],discuss:6,disk:3,doc:16,document:24,doe:23,domain:[6,14],domain_model_input:14,domain_model_input_column:14,domain_model_test_data:14,done:23,doorn:[2,3,5,14],driven:14,drop_target_na:22,dtype:[13,14],dure:[2,9,22],e:[3,14,16],each:[3,5,12,13,14,16,22,23,24],easi:[23,24],easier:23,easiest:24,easili:0,effect:22,electr:[0,3,5,14],electrif:0,els:12,en:16,enabl:0,encount:21,end:22,energi:[0,3,5,6],engin:3,enhanc:16,enough:22,enter:16,enumer:8,env:23,environ:0,equal:22,essenti:0,eu:0,evalu:[3,14,24],event:0,everi:[3,5],everytim:21,exampl:[12,22,23],exc_info:21,exc_typ:21,except:[1,3,7,21,23],exclus:13,execut:[0,22],exist:0,expect:14,expert:0,expos:23,extens:23,extern:0,extra:3,extrem:12,extreme_dai:12,fact:16,fail:[8,12],fall:12,fallback:[0,1,7,8,16],fallback_strategi:12,fals:[21,22],familiar:24,fastapi:23,featur:[2,3,9,13,14,16],feature_add:[1,7,8],feature_appl:[1,7,8],feature_engin:[1,7,8],feature_importances_:13,feature_modul:9,feature_nam:[9,13,14],feed:[3,5],fetch:3,fetcher:3,figur:[1,7,8],file:[3,5],fill:13,fill_valu:[13,14],find:[2,6],find_nonzero_flatlin:22,find_zero_flatlin:22,first:[3,5,22,23],fit:[12,13,14],flatlin:[3,22],flatliner_load_threshold:22,flatliner_threshold:22,flatliner_window:22,flexibl:23,follow:[2,16,24],forecast:[0,3,6,8,12],forecast_input:12,forecast_input_data:12,forecast_pipelin:23,forecasttyp:8,form:2,format_messag:16,formul:[3,5],found:[2,8,21,24],fraction:[0,22],framework:23,frank:2,frederik:2,frequent:[13,14],from:[3,5,13,14,16,23,24],fuction:23,full:14,fulli:[0,12,22,24],futur:[0,12],fysic:0,g:[3,14],gain:14,gain_importance_nam:14,gbdt:14,gener:[0,1,2,7,8,12,24],generate_fallback:12,generate_standard_deviation_data:12,get:[2,3,6,14,16,21,23,24],get_card_sect:16,get_inst:23,github:[3,23,24],give:[3,5],given:[0,8,16],goal:2,govern:2,graphic:0,grid:[0,3],grouped_regressor:[8,12],guid:6,guidelin:2,ha:[3,5,8,14],handl:[13,14],handler:13,have:[0,2,3,5,8,14,23,24],he:14,help:3,here:[2,24],higher:8,histor:[3,12],historic_featur:[1,7,8],hold:9,holiday_featur:[1,7,8],homogenis:22,horizon:[12,23],hour:[0,8,12,22],how:[3,5,22,23,24],howev:[0,12,23],http:[6,16,24],huijbregt:[3,5,14],hyper_param:9,hyperparamet:9,i:16,id:9,idea:12,identifi:22,ignor:22,illustr:23,imag:16,implement:[0,12,14],importance_typ:14,improv:[3,5,14,22],imput:[13,14],imputation_strategi:[13,14],imputer_:13,includ:[3,5,12,23,24],incomplet:[3,5,22],increas:0,ind:22,index:[12,22],indic:[14,21,22],influx:3,inform:[2,3,5,6,9,16,24],infrastructur:2,initi:23,inner:16,input:[0,3,5,8,12,13,14,19,22],input_data:23,inputdatainsufficienterror:8,inputdatainvaliderror:8,inputdatawrongcolumnordererror:8,insert:16,insight:0,instal:[6,24],instanc:[23,24],instead:6,instruct:6,insuffici:8,integ:[13,14],integr:23,interact:23,interest:2,interfac:[0,3,14,24],invalid:[8,16],invalid_coeffici:16,ipynb:[3,5],is_data_suffici:22,issu:[0,2,3,5],its:[0,6],itself:3,j:[3,5,14],jan:2,jansen:[3,5,14],jenkin:3,job:[3,8,22],join:6,jona:2,just:[3,22],keep:16,kei:[16,24],keyword:14,kind:23,knowledg:[3,5],known:[3,5,14],kreuwel:2,ktp:16,kubernet:3,kwarg:[14,16],label:[0,14,16,22],lag_featur:[1,7,8],landscap:0,last:[3,12],latest:6,lc_:22,lead:0,learn:[0,6,8],learning_r:14,least:8,left:[13,14,22],len:12,length:[19,22],let:23,level:[3,5,14,16],level_label:16,level_nam:16,leverag:23,lgb:8,lgbm:[8,12],lgbmopenstfregressor:14,lgbmregressor:14,lightgbm:14,like:[2,24],limit:23,linear:[8,12],linearopenstfregressor:14,linearregressor:14,link:[2,3,5,16,24],list:[9,14,22,23],load1:22,load:[0,3,5,8,12,22,23],load_correct:22,load_project_config:23,loadn:22,local:[0,3,24],locat:[3,5],log:[16,22,23],logger:16,logic:22,loglevel:23,longer:22,look:[2,3,23,24],lot:22,m:[3,5,14],maarten:2,machin:[0,3,6,8],mai:22,main:[9,23,24],make:[0,6,12,13,14],make_basecase_forecast:12,manag:[21,23],mani:22,markdown:16,market:0,matrix:14,max:22,max_depth:14,max_length:19,maximum:19,md:6,mean:[12,13,14,22,23],measur:[0,22],median:[13,14,22],meet:2,member:2,mention:[23,24],messag:[8,16,21],meta:13,metadata:[3,5],metaestimatormixin:13,metamodel:[8,12,14],meter:16,method:[3,5,12,14],metric:[1,7,8,23],microservic:0,microsoft:16,min_child_sampl:14,min_child_weight:14,min_split_gain:14,minim:22,minimal_table_length:22,miss:[13,14,22],missig:13,missing_valu:[13,14],missing_values_handl:[8,12,14],missingvalueshandl:[13,14],mix:0,ml:14,mlflow:3,mlmodeltyp:8,mnt:22,model:[0,1,3,5,7,8,9,22,24],model_cr:[1,7,8],model_select:[1,7,8],model_specif:[1,7,8,23],modelspec:23,modelspecificationdataclass:[9,23],modelwithoutstdev:8,modul:[1,7],modular:0,moment:22,monitor:[1,7,8],more:[2,3,5,8,13,14,16,23,24],most:[0,12,13,14,16],most_frequ:[13,14],mozilla:6,msg:16,multipl:[0,3,5,24],my_task_nam:21,mysql:3,n_estim:14,n_features_in_:13,n_job:14,n_trial:23,na:[13,14,22],name:[14,16,19,21],name_checkpoint:16,namespac:16,nan:[13,14,19,22],natur:0,ndarrai:13,ndimag:22,neat:23,need:3,net:[0,3,5],newli:[3,5,16],next:0,non_null_columns_:13,none:[8,13,14,16,21,22,23],nooten:[3,5,14],nopredictedloaderror:8,norealisedloaderror:8,note:[2,16,22,23],notebook:[3,5],notimplementederror:12,np:[13,14],nullabl:[13,14],num_leav:14,number:13,numer:[13,14],object:[1,2,7,8,13,14,16,21],objective_cr:[1,7,8],observ:22,occur:16,occurr:[13,14],offer:[23,24],offlin:24,old:8,old_model:23,oldmodelhigherscoreerror:8,on_end:21,on_except:21,on_success:21,one:[13,14,16],onli:[12,13,14,22],open:[0,2,3],openstef:[1,2,3,5,23,24],openstef_dbc:23,openstefrepositori:23,openstf:14,openstfregressor:[14,23],oper:[0,23,24],optim:0,optimize_hyperparamet:[1,7,8,23,24],optimize_hyperparameters_pipelin:23,optimize_hyperparameters_pipeline_cor:23,optinon:16,option:[9,12,13,14,16,21,22],order:8,org:6,organ:0,other:[3,5,14,16,22],otherwis:[13,22],ottenbro:[3,5,14],our:6,out:[3,5,14],outlook:16,output:[3,5,14,16],overview:2,overwrite_delay_hour:12,packag:[1,3,6,7,24],page:24,panda:[13,14,23],param:16,paramet:[12,13,14,16,19,21,22],parent:23,part:3,parti:0,particular:14,pass:[16,21],path:23,pathlib:23,pattern:23,pd:[13,14,22,23],perform:[0,3,13,14,16,24],performance_met:[1,7,8],performancemet:16,pid:8,pipelin:[0,1,3,5,6,7,8,13,14],pipeline_:13,pj:22,pj_id:22,placehold:[13,14],platform:0,pleas:[2,6],plug:14,polici:0,pose:0,possibl:[0,2],post:[2,3,16,21],post_team:16,post_teams_on_except:21,postprocess:[1,7,8],potenti:19,power:[0,3,5,14],predict:[0,3,5,8,12,13,14,22],prediction_job:[1,7,8,23],predictionjobdataclass:23,predictionjobexcept:8,predictionjobloop:[8,20],predictor:0,preprocess:[1,7,8],present:[12,23],previou:16,price:[0,3],probabilist:0,procc:9,procedur:2,process:[3,6],produc:[3,5],product:[3,5,14],profil:12,project:[2,6],project_govern:6,project_root:23,proloaf:[8,12],properti:[12,14],provid:[0,3,5,24],proxi:16,pull:6,purpos:[3,5],py:[3,5],pydant:9,pypi:[3,6],python:6,qualiti:12,quantil:[3,14],queri:16,question:2,r2:14,rais:[2,3,8,12,21,23],ran:[23,24],random_st:14,rang:8,react:0,read:[3,6],readi:24,real:[3,5,14],realis:[8,12],reconstruct:0,refer:[0,6,14,23,24],refin:2,refinem:2,refrain:16,reg:14,reg_alpha:14,reg_lambda:14,regard:9,regressor:[8,12,13,23],regressor_:13,regressormixin:[12,13,14],regul:0,regular:12,releas:3,relev:0,reli:23,remov:13,renew:[0,3,5,14],repeat:[19,22],repetit:22,replac:[13,14,19,22],replace_repeated_values_with_nan:19,report:[1,7,8,23],repositori:[3,5,23,24],request:[2,6],requir:[3,6,12,14,23,24],resampl:22,resili:0,resourc:24,respect:14,respons:2,rest:3,retriev:14,rise:0,risk:0,rmse:14,row:22,run:[0,3,5,21,23],run_traci:[1,7,8],runtim:16,runtime_env:23,s3_bucket:3,s:[3,5,6,13,14,22,23,24],same:23,sav:[3,5],scalabl:23,scale:14,schedul:[3,23],schema:[3,5],scikit:0,scipi:22,score:[8,14],screenshot:24,secret:16,section:[16,23],section_dict:16,sector:[0,6],secur:16,see:[2,3,5,6,14,16,24],select:[2,3],self:[16,23],send:16,separ:14,sequenc:[6,19],sequenti:19,seri:22,serial:[1,7,8],set:[3,12,13,14,16,19,21,22,23,24],set_feature_import:14,setup:[23,24],shot:6,should:[8,9,13,14,16,21,22,23],show:[23,24],shown:23,silent:14,similar:19,simpl:16,simpleimput:13,sinc:[13,14],size:22,skip:22,sklearn:[12,13,14],smallest:[13,14],snippet:23,softwar:0,solar:[0,3,5,8,14],some:24,sourc:[0,3,5],specif:[9,14,16],specifi:[9,16,22],split:[0,3,5,14],split_forecast:[1,7,8],split_funct:[1,7,8],sql:[3,16],squarederror:14,stack:0,stack_info:21,standard:[0,8,12],standard_deviation_gener:[1,7,8],standarddeviationgener:12,start:[6,12,22,24],start_level:16,stategi:0,statement:[16,22],station:22,stationflatlin:22,std:12,step:[3,5,22],still:12,stoel:2,storag:3,store:[3,5],str:[9,12,13,14,16,19,21,22,23],strategi:[12,13,14],string:[13,14,16],structur:[3,5],subject:2,submit:[3,5,6,14],submodul:[1,7],subpackag:[1,7],subsampl:14,subsample_for_bin:14,subsample_freq:14,substat:[3,5,14],substitut:12,success:[8,16,21],suffici:22,suggest:22,support:16,suppos:23,suppress_except:21,swinkel:2,sy:23,t:[12,22],tabl:[16,22],target:[3,5,14,22],task:[1,3,7,8,16],taskcontext:[8,20],team:[1,2,6,7,8,21],techniqu:[3,5],technolog:0,tekton:3,teng:[3,5,14],term:[6,23],test:[3,14],text:16,than:[13,14,22,23],them:14,therefor:[16,23],thi:[0,2,3,5,6,12,13,14,16,22,23,24],those:24,threshold:22,through:23,time:[3,5,12,14,16,22],time_delai:22,timedelta:22,timeseri:[0,22],timestamp:22,timestep:22,titl:16,todo:22,togeth:[3,5,23],tool:2,total:[3,5,16,22],total_gain:14,toward:[0,24],tracy_todo:16,tracyjobresult:8,trafo:22,train:[0,3,5,9,12,14,22,24],train_create_forecast_backtest:[1,7,8,24],train_model:[1,7,8,23,24],train_model_pipeline_cor:23,train_pipelin:23,transfer:[3,5],transform:13,transit:0,truth:14,tsc:2,tune:23,tupl:23,two:[3,5,14,23],type:[12,13,14,16,19,22,23],under:6,understand:3,union:[9,13,16,22],uniqu:0,unknown:[3,5,8],unlik:23,unseen:14,up:[3,23,24],url:16,us:[3,5,6,9,12,13,14,16,21,22,23,24],usag:[3,24],user:[0,3,6],util:[1,7,8,20],valid:[0,1,3,7,8,12,13],validation_data:12,valu:[8,12,13,14,16,19,22],valueerror:12,van:[2,3,5,14],version:6,via:[0,3,16],video:6,visual:3,wa:16,wai:[0,23,24],want:6,warn:14,watch:6,we:[2,3,5,14],weather:[0,3,5],weather_featur:[1,7,8],webhook:16,websit:6,week:[3,12],weekli:2,weight:[14,22],weight_importance_nam:14,welcom:2,well:23,wether:14,what:[2,24],when:[0,3,5,13,14,21],whenev:[3,5],where:22,wherea:23,whether:16,which:[0,3,5,6,12,14,23],who:24,wind:[0,3,5,8,14],wish:24,within:[14,23],without:24,work:0,would:2,wrap:14,wrapper:23,write:[3,23],wrong:8,x:[13,14,22],xgb:[3,8,12],xgb_quantil:[8,12],xgboost:14,xgbopenstfregressor:14,xgbquantileopenstfregressor:14,xgbregressor:14,y:[3,5,13,14],y_train:14,yesterdai:3,you:[2,3,6],your:2,yourself:3,zero:[6,13,22]},titles:["About OpenSTEF","API reference","Community","Concepts","&lt;no title&gt;","Domain Adaptation for Zero Shot Learning in Sequence (DAZLS)","Welcome to the documentation of OpenSTEF!","openstef","openstef package","openstef.data_classes package","openstef.feature_engineering package","openstef.metrics package","openstef.model package","openstef.model.metamodels package","openstef.model.regressors package","openstef.model_selection package","openstef.monitoring package","openstef.pipeline package","openstef.postprocessing package","openstef.preprocessing package","openstef.tasks package","openstef.tasks.utils package","openstef.validation package","Pipelines user guide","User guides"],titleterms:{"case":23,"enum":8,"function":24,about:0,adapt:[3,5],api:1,applic:[3,24],apply_featur:10,architectur:3,base:23,basecas:12,calculate_kpi:20,committe:2,commun:2,compon:23,concept:3,confidence_interval_appl:12,content:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],contribut:[2,6],creat:23,create_basecase_forecast:[17,20],create_component_forecast:17,create_components_forecast:20,create_forecast:[17,20],create_solar_forecast:20,create_wind_forecast:20,custom_regressor:14,data_class:9,dazl:[3,5,14],depend:21,document:6,domain:[3,5],exampl:24,except:8,fallback:12,featur:0,feature_add:10,feature_appl:10,feature_engin:10,figur:11,forecast:[23,24],full:24,gener:10,grouped_regressor:13,guid:[23,24],high:24,historic_featur:10,holiday_featur:10,hyperparamet:23,implement:[23,24],jupyt:24,lag_featur:10,learn:[3,5],level:24,lgbm:14,licens:6,linear:14,metamodel:13,metric:11,missing_values_handl:13,model:[12,13,14,23],model_cr:12,model_select:15,model_specif:9,modul:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],monitor:16,more:6,notebook:24,object:12,objective_cr:12,openstef:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],optim:23,optimize_hyperparamet:[17,20],packag:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],performance_met:16,pipelin:[17,23,24],postprocess:18,prediction_job:9,predictionjobloop:21,preprocess:19,proloaf:14,refer:1,regressor:14,report:11,roadmap:2,run_traci:20,sequenc:[3,5],serial:12,shot:[3,5],softwar:3,split_forecast:20,split_funct:9,standard_deviation_gener:12,steer:2,submodul:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],subpackag:[8,12,20],support:2,task:[20,21,23],taskcontext:21,team:16,technic:2,train:23,train_create_forecast_backtest:17,train_model:[17,20],user:[23,24],util:[17,21],valid:22,weather_featur:10,welcom:6,xgb:14,xgb_quantil:14,zero:[3,5]}})