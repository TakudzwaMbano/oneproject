import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy redirect',
};

export default function PrivacyPage() {
  redirect('https://www.termsfeed.com/live/5da421d9-d3c6-46a2-bee0-b95f1b0403f1');
}
