import type { UseClipboardReturn } from '@rocket.chat/fuselage-hooks';
import { useClipboard, useEffectEvent } from '@rocket.chat/fuselage-hooks';
import { useToastMessageDispatch, useTranslation } from '@rocket.chat/ui-contexts';

export default function useClipboardWithToast(text: string): UseClipboardReturn {
	const t = useTranslation();
	const dispatchToastMessage = useToastMessageDispatch();

	return useClipboard(text, {
		onCopySuccess: useEffectEvent(() => dispatchToastMessage({ type: 'success', message: t('Copied') })),
		onCopyError: useEffectEvent((e) => dispatchToastMessage({ type: 'error', message: e })),
	});
}
