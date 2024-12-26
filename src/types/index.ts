export type ReviewStatus = 'pending' | 'in-progress' | 'completed';
export type IssueType = 'error' | 'warning' | 'suggestion';
export type IssueSeverity = 'critical' | 'major' | 'minor';

export interface CodeReview {
  id: string;
  fileName: string;
  uploadDate: string;
  issuesCount: number;
  status: ReviewStatus;
}

export interface CodeIssue {
  id: string;
  fileName: string;
  type: IssueType;
  severity: IssueSeverity;
  description: string;
  suggestedFix?: string;
  lineNumber: number;
}

export interface UserPreferences {
  languages: string[];
  theme: 'light' | 'dark';
  notifications: boolean;
}