import type { NotificationType } from "@/types/types";
import type { JSX } from "react";
import {
  CheckCircle,
  AlertCircle,
  Info,
  XCircle,
  Gift,
  UserCheck,
} from "lucide-react";

export const iconMap: Record<NotificationType, JSX.Element> = {
  payment_received: <CheckCircle className="text-green-500 w-5 h-5" />,
  payment_sent: <XCircle className="text-red-500 w-5 h-5" />,
  funds_deposited: <CheckCircle className="text-green-500 w-5 h-5" />,
  funds_withdrawn: <XCircle className="text-yellow-500 w-5 h-5" />,
  transaction_failed: <XCircle className="text-red-500 w-5 h-5" />,
  wallet_funded: <CheckCircle className="text-green-500 w-5 h-5" />,
  low_balance: <AlertCircle className="text-yellow-500 w-5 h-5" />,
  account_created: <UserCheck className="text-green-500 w-5 h-5" />,
  account_verified: <CheckCircle className="text-green-500 w-5 h-5" />,
  kyc_complete: <CheckCircle className="text-green-500 w-5 h-5" />,
  login_attempt: <AlertCircle className="text-orange-500 w-5 h-5" />,
  password_changed: <Info className="text-blue-500 w-5 h-5" />,
  two_factor_enabled: <CheckCircle className="text-green-500 w-5 h-5" />,
  suspicious_activity: <AlertCircle className="text-red-500 w-5 h-5" />,
  system_update: <Info className="text-blue-500 w-5 h-5" />,
  maintenance: <Info className="text-yellow-500 w-5 h-5" />,
  new_feature: <Gift className="text-purple-500 w-5 h-5" />,
  service_disruption: <AlertCircle className="text-red-500 w-5 h-5" />,
  promotion: <Gift className="text-green-500 w-5 h-5" />,
  referral_bonus: <Gift className="text-pink-500 w-5 h-5" />,
  discount_offer: <Gift className="text-yellow-500 w-5 h-5" />,
  success: <CheckCircle className="text-green-500 w-5 h-5" />,
  warning: <AlertCircle className="text-yellow-500 w-5 h-5" />,
  error: <XCircle className="text-red-500 w-5 h-5" />,
  info: <Info className="text-blue-500 w-5 h-5" />,
};