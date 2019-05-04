import Vue from "vue";
import keys from "lodash/keys";
import indexOf from "lodash/indexOf";

export default {
    setTemplateTypes : (state, newValue) => {
        state.templateTypes = newValue;
    },
    setTemplateTypeContents : (state, newValue) => {
        state.templateTypeContents = newValue;
    },
    setPermissions : (state, newValue) => {
        state.permissions = newValue;
    },
    
    //language specific setter
    setEditorContentForCurrentState : (state, newValue) => {
        let tmp = state.templateTypeContents;
        let descriptor = state.templateTypes[state.currentTemplateType].field.body
        tmp[state.activeLanguage][descriptor] = newValue;
        state.templateTypeContents = tmp;
    },
    setSubjectForCurrentState : (state, newValue) => {
        let tmp = state.templateTypeContents;
        let descriptor = state.templateTypes[state.currentTemplateType].field.subject
        tmp[state.activeLanguage][descriptor] = newValue;
        state.templateTypeContents = tmp;
    },

    //view controllers
    setCurrentTemplateType : (state, newValue) => {
        state.currentTemplateType = newValue;
    },
    setActiveLanguage : (state, newValue) => {
        state.activeLanguage = newValue;
    },
    setLanguages : (state, newValue) => {
        state.languages = newValue;
    },
    nextLanguage: (state) => {
        let keyList = keys(state.languages);
        let currentIndex = indexOf(keyList, state.activeLanguage);
        if(currentIndex < keyList.length) {
            state.activeLanguage = keyList[currentIndex+1];
        }
    },
    previousLanguage: (state) => {
        let keyList = keys(state.languages);
        let currentIndex = indexOf(keyList, state.activeLanguage);
        if(currentIndex > 0) {
            state.activeLanguage = keyList[currentIndex-1];
        }
    },
    nextTemplateType : (state) => {
        let keyList = keys(state.templateTypes);
        let currentIndex = indexOf(keyList, state.currentTemplateType);
        if(currentIndex < keyList.length) {
            state.currentTemplateType = keyList[currentIndex+1];
        }
    },
    previousTemplateType : (state) => {
        let keyList = keys(state.templateTypes);
        let currentIndex = indexOf(keyList, state.currentTemplateType);
        if(currentIndex > 0) {
            state.currentTemplateType = keyList[currentIndex-1];
        }
    },
    setSurvey : (state, newValue) => {
        state.survey = newValue;
    },
    toggleDebugMode: (state) => {
        state.debugMode = !state.debugMode;
    }
};