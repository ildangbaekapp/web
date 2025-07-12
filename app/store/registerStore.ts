import { create } from 'zustand';

interface RegisterState {
  // InfoPage states
  email: string;
  password: string;
  passwordConfirm: string;
  businessNumber: string;
  isEmailChecked: boolean;

  // RolePage states
  selectedRole: "jobSeeker" | "employer" | null;

  // TermPage states
  agreements: {
    age: boolean;
    service: boolean;
    privacy: boolean;
    thirdParty: boolean;
    marketing: boolean;
  };

  // VerifyPage states
  name: string;
  birthDate: string;
  gender: string;
  telecom: string;
  phone: string;
  verificationCode: string;
  isCodeSent: boolean;
  isVerified: boolean;
  timerExpired: boolean;

  // Actions for InfoPage
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordConfirm: string) => void;
  setBusinessNumber: (businessNumber: string) => void;
  setIsEmailChecked: (checked: boolean) => void;

  // Actions for RolePage
  setSelectedRole: (role: "jobSeeker" | "employer" | null) => void;

  // Actions for TermPage
  setAgreements: (agreements: {
    age: boolean;
    service: boolean;
    privacy: boolean;
    thirdParty: boolean;
    marketing: boolean;
  }) => void;
  setAllAgreed: (checked: boolean) => void;

  // Actions for VerifyPage
  setName: (name: string) => void;
  setBirthDate: (birthDate: string) => void;
  setGender: (gender: string) => void;
  setTelecom: (telecom: string) => void;
  setPhone: (phone: string) => void;
  setVerificationCode: (code: string) => void;
  setIsCodeSent: (sent: boolean) => void;
  setIsVerified: (verified: boolean) => void;
  setTimerExpired: (expired: boolean) => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  // Initial states for InfoPage
  email: "",
  password: "",
  passwordConfirm: "",
  businessNumber: "",
  isEmailChecked: false,

  // Initial states for RolePage
  selectedRole: null,

  // Initial states for TermPage
  agreements: {
    age: false,
    service: false,
    privacy: false,
    thirdParty: false,
    marketing: false,
  },

  // Initial states for VerifyPage
  name: "",
  birthDate: "",
  gender: "male",
  telecom: "SKT", // Default telecom option
  phone: "",
  verificationCode: "",
  isCodeSent: false,
  isVerified: false,
  timerExpired: false,

  // Actions for InfoPage
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setBusinessNumber: (businessNumber) => set({ businessNumber }),
  setIsEmailChecked: (isEmailChecked) => set({ isEmailChecked }),

  // Actions for RolePage
  setSelectedRole: (selectedRole) => set({ selectedRole }),

  // Actions for TermPage
  setAgreements: (agreements) => set({ agreements }),
  setAllAgreed: (checked) => set((state) => ({
    agreements: {
      ...state.agreements,
      age: checked,
      service: checked,
      privacy: checked,
      thirdParty: checked,
      marketing: checked,
    },
  })),

  // Actions for VerifyPage
  setName: (name) => set({ name }),
  setBirthDate: (birthDate) => set({ birthDate }),
  setGender: (gender) => set({ gender }),
  setTelecom: (telecom) => set({ telecom }),
  setPhone: (phone) => set({ phone }),
  setVerificationCode: (verificationCode) => set({ verificationCode }),
  setIsCodeSent: (isCodeSent) => set({ isCodeSent }),
  setIsVerified: (isVerified) => set({ isVerified }),
  setTimerExpired: (timerExpired) => set({ timerExpired }),
}));
