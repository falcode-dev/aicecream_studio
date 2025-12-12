import { PencilIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface Props {
	isUpdated: boolean;
}

export default function DateIcon({ isUpdated }: Props) {
	const Icon = isUpdated ? ArrowPathIcon : PencilIcon;
	return <Icon className="date-icon" style={{ width: '1em', height: '1em' }} />;
}
