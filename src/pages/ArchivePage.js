import { useState, useEffect, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import Main from '../components/Main';
import DateRangeFilterForm from '../components/DateRangeFilterForm';
import FilterModeButtons from '../components/FilterModeButtons';
import MonthYearFilterForm from '../components/MonthYearFilterForm';
import Loading from '../components/Loading';
import { extractUniqueMonthsAndYears } from '../helpers/dateHelper';

const ArchivePage = () => {
	const { page = 1 } = useParams();
	const [posts = []] = useAllPrismicDocumentsByType('blog_post', {
		orderings: {
			field: 'my.blog_post.date',
			direction: 'desc',
		},
	});

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [filterMode, setFilterMode] = useState('date');
	const [loading, setLoading] = useState(true);

	const filterPosts = useCallback(() => {
		const filtered = posts.filter(post => {
			const postDate = new Date(post.data.date);
			const postMonth = postDate.toLocaleString('default', { month: 'long' });
			const postYear = postDate.getFullYear();
			const isMonthMatch =
				!selectedMonth || postMonth.toLowerCase() === selectedMonth.toLowerCase();
			const isYearMatch = !selectedYear || postYear.toString() === selectedYear;

			if (filterMode === 'date') {
				return (
					(!startDate || postDate >= new Date(startDate)) &&
					(!endDate || postDate <= new Date(endDate)) &&
					isMonthMatch &&
					isYearMatch
				);
			}
			return isMonthMatch && isYearMatch;
		});

		setFilteredPosts(filtered);
	}, [selectedMonth, selectedYear, posts, startDate, endDate, filterMode]);

	useEffect(() => {
		if (posts.length > 0) {
			setLoading(false);
			filterPosts();
		}
	}, [startDate, endDate, selectedMonth, selectedYear, posts, filterMode, filterPosts]);

	const { months, years } = extractUniqueMonthsAndYears(posts);

	const handleFilterModeChange = mode => {
		setStartDate('');
		setEndDate('');
		setSelectedMonth('');
		setSelectedYear('');
		setFilterMode(mode);
		setFilteredPosts(filterMode === 'date' ? posts : []);
	};

	return (
		<Row>
			<Col md={12}>
				{loading ? (
					<Loading />
				) : (
					<>
						<div className={'filter-form'}>
							<FilterModeButtons currentMode={filterMode} onModeChange={handleFilterModeChange} />

							{filterMode === 'date' && (
								<DateRangeFilterForm
									startDate={startDate}
									endDate={endDate}
									setStartDate={setStartDate}
									setEndDate={setEndDate}
									searchResultCount={filteredPosts.length}
									onFilter={filterPosts}
								/>
							)}

							{filterMode === 'monthYear' && (
								<MonthYearFilterForm
									selectedMonth={selectedMonth}
									selectedYear={selectedYear}
									setSelectedMonth={setSelectedMonth}
									setSelectedYear={setSelectedYear}
									searchResultCount={filteredPosts.length}
									months={months}
									years={years}
									onFilter={filterPosts}
								/>
							)}
						</div>

						<div>
							{filteredPosts && filteredPosts.length > 0 && (
								<Main posts={filteredPosts} path={'/'} page={parseInt(page, 10)} />
							)}
						</div>
					</>
				)}
			</Col>
		</Row>
	);
};

export default ArchivePage;
