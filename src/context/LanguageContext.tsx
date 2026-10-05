import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageCode = 'en' | 'hi' | 'gu' | 'mr' | 'pa';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  native: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
];

const TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  // Navigation & Sections
  'nav.dashboard': {
    en: 'Dashboard',
    hi: 'डैशबोर्ड',
    gu: 'ડેશબોર્ડ',
    mr: 'डॅशबोर्ड',
    pa: 'ਡੈਸ਼ਬੋਰਡ'
  },
  'nav.my_tasks': {
    en: 'My Tasks',
    hi: 'मेरे कार्य',
    gu: 'મારા કાર્યો',
    mr: 'माझी कामे',
    pa: 'ਮੇਰੇ ਕੰਮ'
  },
  'nav.cases_view': {
    en: 'Cases View',
    hi: 'केस सूची',
    gu: 'કેસ સૂચિ',
    mr: 'प्रकरणे पहा',
    pa: 'ਕੇਸ ਵੇਖੋ'
  },
  'nav.hierarchy': {
    en: 'Hierarchy Monitor',
    hi: 'पदानुक्रम मॉनिटर',
    gu: 'શ્રેણી મોનિટર',
    mr: 'पदक्रम मॉनिटर',
    pa: 'ਦਰਜਾਬੰਦੀ ਮਾਨੀਟਰ'
  },
  'nav.employee_perf': {
    en: 'Employee Performance',
    hi: 'कर्मचारी प्रदर्शन',
    gu: 'કર્મચારી પ્રદર્શન',
    mr: 'कर्मचारी कामगिरी',
    pa: 'ਕਰਮਚਾਰੀ ਪ੍ਰਦਰਸ਼ਨ'
  },
  'nav.crm_leads': {
    en: 'CRM & Leads',
    hi: 'सीआरएम और लीड्स',
    gu: 'સીઆરએમ અને લીડ્સ',
    mr: 'सीआरएम आणि लीड्स',
    pa: 'ਸੀਆਰਐਮ ਅਤੇ ਲੀਡਸ'
  },
  'nav.los_apps': {
    en: 'LOS Application',
    hi: 'एलओएस आवेदन',
    gu: 'એલઓએસ અરજી',
    mr: 'एलओएस अर्ज',
    pa: 'ਐਲਓਐਸ ਅਰਜ਼ੀ'
  },
  'nav.msme_journey': {
    en: 'MSME Journey',
    hi: 'एमएसएमई ऋण यात्रा',
    gu: 'એમએસએમઈ યાત્રા',
    mr: 'एमएसएमई प्रवास',
    pa: 'ਐਮਐਸਐਮਈ ਯਾਤਰਾ'
  },
  'nav.applications': {
    en: 'Applications',
    hi: 'सभी आवेदन',
    gu: 'બધી અરજીઓ',
    mr: 'सर्व अर्ज',
    pa: 'ਸਾਰੀਆਂ ਅਰਜ਼ੀਆਂ'
  },
  'nav.customer_360': {
    en: 'Customer 360',
    hi: 'ग्राहक 360 दृश्य',
    gu: 'ગ્રાહક 360',
    mr: 'ग्राहक 360',
    pa: 'ਗਾਹਕ 360'
  },
  'nav.pre_eligibility': {
    en: 'Pre-Eligibility',
    hi: 'पूर्व-पात्रता जांच',
    gu: 'પૂર્વ પાત્રતા',
    mr: 'पूर्व-पात्रता',
    pa: 'ਪੂਰਵ ਯੋਗਤਾ'
  },
  'nav.kyc_dedupe': {
    en: 'KYC & Dedupe',
    hi: 'केवाईसी और डिडूप',
    gu: 'કેવાયસી અને ડિડૂપ',
    mr: 'केवायसी आणि डिडूप',
    pa: 'ਕੇਵਾਈਸੀ ਅਤੇ ਡਿਡੂਪ'
  },
  'nav.documents': {
    en: 'Documents',
    hi: 'दस्तावेज़ वॉल्ट',
    gu: 'દસ્તાવેજો',
    mr: 'कागदपत्रे',
    pa: 'ਦਸਤਾਵੇਜ਼'
  },
  'nav.credit_command': {
    en: 'Credit & Decisioning',
    hi: 'क्रेडिट और निर्णय',
    gu: 'ક્રેડિટ અને નિર્ણય',
    mr: 'क्रेडिट आणि निर्णय',
    pa: 'ਕ੍ਰੈਡਿਟ ਅਤੇ ਫੈਸਲੇ'
  },
  'nav.loan_ops': {
    en: 'Loan Operations',
    hi: 'ऋण परिचालन',
    gu: 'લોન કામગીરી',
    mr: 'कर्ज ऑपरेशन्स',
    pa: 'ਲੋਨ ਓਪਰੇਸ਼ਨ'
  },
  'nav.people_work': {
    en: 'People & Work',
    hi: 'मानव संसाधन एवं कार्य',
    gu: 'માનવ સંસાધન અને કાર્ય',
    mr: 'मनुष्यबळ आणि काम',
    pa: 'ਮਨੁੱਖੀ ਸਰੋਤ ਅਤੇ ਕੰਮ'
  },
  'nav.assets_admin': {
    en: 'Assets & Admin',
    hi: 'संपत्ति और प्रशासन',
    gu: 'સંપત્તિ અને વહીવટ',
    mr: 'मालमत्ता आणि प्रशासन',
    pa: 'ਜਾਇਦਾਦ ਅਤੇ ਪ੍ਰਸ਼ਾਸਨ'
  },
  'nav.governance': {
    en: 'Governance',
    hi: 'कॉर्पोरेट गवर्नेंस',
    gu: 'ગવર્નન્સ અને કાયદાકીય',
    mr: 'गव्हर्नन्स आणि नियम',
    pa: 'ਸ਼ਾਸਨ ਅਤੇ ਨਿਯਮ'
  },
  'nav.insights': {
    en: 'Insights & Platform',
    hi: 'अंतर्दृष्टि और एएलएम',
    gu: 'ઇનસાઇટ્સ અને પ્લેટફોર્મ',
    mr: 'इनसाइट्स आणि प्लॅटफॉर्म',
    pa: 'ਸੂਝ ਅਤੇ ਪਲੇਟਫਾਰਮ'
  },
  'nav.all_workspaces': {
    en: 'All Workspaces',
    hi: 'सभी वर्कस्पेस',
    gu: 'બધા વર્કસ્પેસ',
    mr: 'सर्व वर्कस्पेस',
    pa: 'ਸਾਰੇ ਵਰਕਸਪੇਸ'
  },

  // Banner & Products
  'banner.headline': {
    en: 'Empowering with Care, Compassion and Confidence',
    hi: 'देखभाल, करुणा और विश्वास के साथ सशक्तिकरण',
    gu: 'કાળજી, કરુણા અને આત્મવિશ્વાસ સાથે સશક્તિકરણ',
    mr: 'काळजी, करुणा आणि आत्मविश्वासाने सक्षमीकरण',
    pa: 'ਦੇਖਭਾਲ, ਹਮਦਰਦੀ ਅਤੇ ਵਿਸ਼ਵਾਸ ਨਾਲ ਸ਼ਕਤੀਕਰਨ'
  },
  'banner.tagline': {
    en: 'Hum Badlenge Aapki Duniya',
    hi: 'हम बदलेंगे आपकी दुनिया',
    gu: 'અમે બદલીશું તમારી દુનિયા',
    mr: 'आम्ही बदलू तुमचे जग',
    pa: 'ਅਸੀਂ ਬਦਲਾਂਗੇ ਤੁਹਾਡੀ ਦੁਨੀਆ'
  },
  'banner.quote': {
    en: 'Financial services that create opportunities for a stronger, self-reliant Bharat.',
    hi: 'वित्तीय सेवाएं जो एक मजबूत, आत्मनिर्भर भारत के लिए अवसर पैदा करती हैं।',
    gu: 'નાણાકીય સેવાઓ જે મજબૂત, આત્મનિર્ભર ભારત માટે તકો બનાવે છે.',
    mr: 'एक मजबूत, स्वावलंबी भारतासाठी संधी निर्माण करणाऱ्या आर्थिक सेवा.',
    pa: 'ਵਿੱਤੀ ਸੇਵਾਵਾਂ ਜੋ ਇੱਕ ਮਜ਼ਬੂਤ, ਆਤਮ-ਨਿਰਭਰ ਭਾਰਤ ਲਈ ਮੌਕੇ ਪੈਦਾ ਕਰਦੀਆਂ ਹਨ।'
  },
  'prod.two_wheeler': {
    en: 'Two Wheeler Loan',
    hi: 'दोपहिया वाहन ऋण',
    gu: 'ટુ વ્હીલર લોન',
    mr: 'दुचाकी कर्ज',
    pa: 'ਦੋ ਪਹੀਆ ਲੋਨ'
  },
  'prod.msme': {
    en: 'MSME Loan',
    hi: 'एमएसएमई व्यापार ऋण',
    gu: 'એમએસએમઈ લોન',
    mr: 'एमएसएमई कर्ज',
    pa: 'ਐਮਐਸਐਮਈ ਲੋਨ'
  },
  'prod.solar': {
    en: 'Solar Loan',
    hi: 'सौर ऊर्जा ऋण',
    gu: 'સોલાર લોન',
    mr: 'सोलर कर्ज',
    pa: 'ਸੋਲਰ ਲੋਨ'
  },
  'prod.erickshaw': {
    en: 'E-Rickshaw Loan',
    hi: 'ई-रिक्शा ऋण',
    gu: 'ઇ-રિક્ષા લોન',
    mr: 'ई-रिक्षा कर्ज',
    pa: 'ਈ-ਰਿਕਸ਼ਾ ਲੋਨ'
  },
  'prod.tractor': {
    en: 'Tractor Loan',
    hi: 'ट्रैक्टर कृषि ऋण',
    gu: 'ટ્રેક્ટર લોન',
    mr: 'ट्रॅक्टर कर्ज',
    pa: 'ਟਰੈਕਟਰ ਲੋਨ'
  },
  'prod.lap': {
    en: 'LAP',
    hi: 'संपत्ति पर ऋण (LAP)',
    gu: 'પ્રોપર્ટી લોન (LAP)',
    mr: 'मालमत्ता तारण कर्ज',
    pa: 'ਜਾਇਦਾਦ ਉੱਤੇ ਲੋਨ'
  },

  // KPI Metrics
  'kpi.total_aum': {
    en: 'Total AUM Portfolio',
    hi: 'कुल एयूएम पोर्टफोलियो',
    gu: 'કુલ એયુએમ પોર્ટફોલિયો',
    mr: 'एकूण एयूएम पोर्टफोलिओ',
    pa: 'ਕੁੱਲ ਏਯੂਐਮ ਪੋਰਟਫੋਲੀਓ'
  },
  'kpi.monthly_disb': {
    en: 'Monthly Disbursements',
    hi: 'मासिक ऋण वितरण',
    gu: 'માસિક વિતરણ',
    mr: 'मासिक कर्ज वितरण',
    pa: 'ਮਹੀਨਾਵਾਰ ਵੰਡ'
  },
  'kpi.collection_eff': {
    en: 'Collection Efficiency',
    hi: 'संग्रह दक्षता (0+ DPD)',
    gu: 'વસૂલાત કાર્યક્ષમતા',
    mr: 'वसुली कार्यक्षमता',
    pa: 'ਵਸੂਲੀ ਕੁਸ਼ਲਤਾ'
  },
  'kpi.gross_npa': {
    en: 'Gross NPA (90+ DPD)',
    hi: 'सकल एनपीए (90+ दिन)',
    gu: 'ગ્રોસ એનપીએ',
    mr: 'एकूण एनपीए',
    pa: 'ਗ੍ਰਾਸ ਐਨਪੀਏ'
  },
  'kpi.nim': {
    en: 'Net Interest Margin',
    hi: 'शुद्ध ब्याज मार्जिन (NIM)',
    gu: 'નેટ વ્યાજ માર્જિન',
    mr: 'निव्वळ व्याज मार्जिन',
    pa: 'ਸ਼ੁੱਧ ਵਿਆਜ ਮਾਰਜਿਨ'
  },
  'kpi.active_branches': {
    en: 'Active Branches',
    hi: 'सक्रिय शाखाएं',
    gu: 'સક્રિય શાખાઓ',
    mr: 'सक्रिय शाखा',
    pa: 'ਸਰਗਰਮ ਸ਼ਾਖਾਵਾਂ'
  },
  'kpi.sourcing_pipeline': {
    en: 'Sourcing Pipeline',
    hi: 'सोर्सिंग पाइपलाइन',
    gu: 'સોર્સિંગ પાઇપલાઇન',
    mr: 'सोर्सिंग पाइपलाइन',
    pa: 'ਸੋਰਸਿੰਗ ਪਾਈਪਲਾਈਨ'
  },
  'kpi.avg_tat': {
    en: 'Avg Decision TAT',
    hi: 'औसत निर्णय टीएटी',
    gu: 'સરેરાશ નિર્ણય સમય',
    mr: 'सरासरी निर्णय वेळ',
    pa: 'ਔਸਤ ਫੈਸਲਾ ਸਮਾਂ'
  },

  // Actions & Headers
  'action.search': {
    en: 'Search applications, borrowers, PAN, phone (⌘K)...',
    hi: 'आवेदन, उधारकर्ता, पैन, मोबाइल नंबर खोजें (⌘K)...',
    gu: 'અરજીઓ, ગ્રાહક, પાન નંબર શોધો (⌘K)...',
    mr: 'अर्ज, ग्राहक, पॅन नंबर शोधा (⌘K)...',
    pa: 'ਅਰਜ਼ੀਆਂ, ਗਾਹਕ, ਪੈਨ ਨੰਬਰ ਖੋਜੋ (⌘K)...'
  },
  'action.board_briefing': {
    en: 'Board Dossier',
    hi: 'बोर्ड रिपोर्ट फ़ाइल',
    gu: 'બોર્ડ રિપોર્ટ',
    mr: 'बोर्ड अहवाल',
    pa: 'ਬੋਰਡ ਰਿਪੋਰਟ'
  },
  'action.loan_calculator': {
    en: 'EMI Calculator',
    hi: 'ईएमआई कैलकुलेटर',
    gu: 'ઈએમઆઈ કેલ્ક્યુલેટર',
    mr: 'ईएमआय कॅल्क्युलेटर',
    pa: 'ਈਐਮਆਈ ਕੈਲਕੁਲੇਟਰ'
  },
  'action.kyc_check': {
    en: 'Aadhaar / PAN Dedupe',
    hi: 'आधार / पैन डिडूप जांच',
    gu: 'આધાર / પાન તપાસ',
    mr: 'आधार / पॅन पडताळणी',
    pa: 'ਆਧਾਰ / ਪੈਨ ਜਾਂਚ'
  }
};

interface LanguageContextType {
  language: LanguageCode;
  languageLabel: string;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  languageLabel: 'English',
  setLanguage: () => {},
  t: (key, defaultText) => defaultText || key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('namdev_selected_language');
    if (saved && (saved === 'en' || saved === 'hi' || saved === 'gu' || saved === 'mr' || saved === 'pa')) {
      return saved as LanguageCode;
    }
    return 'en';
  });

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('namdev_selected_language', newLang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = (key: string, defaultText?: string): string => {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
      return TRANSLATIONS[key][language];
    }
    return defaultText || key;
  };

  const currentOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageLabel: currentOption.label,
        setLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
