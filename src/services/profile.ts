export const getProfile = async (id: number): Promise<string> => {
  try {
    return `Helloworld ${id}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Error encounterd');
    return 'error';
  }
};
