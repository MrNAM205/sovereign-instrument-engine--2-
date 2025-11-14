/**
 * Converts a Firebase Timestamp object to a readable time string.
 * @param timestamp - The Firebase Timestamp object.
 * @returns A formatted time string (e.g., "02:30:15 PM") or "N/A".
 */
export const formatTimestamp = (timestamp: any): string => {
  if (timestamp && typeof timestamp.toDate === 'function') {
    return timestamp.toDate().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }
  return 'N/A';
};
