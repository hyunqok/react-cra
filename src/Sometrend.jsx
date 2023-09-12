import './scss/analysis_2.0.scss';

import { Card, CardHeader, CardContents } from './components/card';
import { Table, TableHeader } from './components/table';
import { Button } from './components/button';

export default function Sometrend() {
	return (
		<>
			<div className="col col-12">
				<div className="row">
					<div className="col-6">
						<Card>
							<CardHeader>연관어 분류 트리</CardHeader>
							<CardContents>
								<Table addClass="type1 asso-category-tree">
									<TableHeader>
										<table>
											<tbody>
												<tr>
													<th style={{ textAlign: 'left' }}>대분류</th>
													<th style={{ width: '120px', textAlign: 'left' }}>중분류</th>
													<th style={{ width: '70px', textAlign: 'center' }}>건수</th>
													<th style={{ width: '110px', textAlign: 'right' }}>연관어 갯수</th>
													<th style={{ width: '140px', textAlign: 'left' }}>연관어</th>
													<th style={{ width: '70px', textAlign: 'right' }}>건수</th>
												</tr>
											</tbody>
										</table>
									</TableHeader>

									<div className="ps-scrollbar" style={{ height: '500px' }}>
										<div className="table-body cell-border">
											<div className="table-cell">
												<table>
													<tbody>
														<tr>
															<td rowSpan={3}>브랜드</td>
															<td rowSpan={3} style={{ width: '120px' }}>
																음식
															</td>
															<td
																rowSpan={3}
																style={{ width: '70px', textAlign: 'right' }}
															>
																312
															</td>
															<td
																rowSpan={3}
																style={{ width: '110px', textAlign: 'right' }}
															>
																67
															</td>
															<td style={{ width: '140px' }}>cj</td>
															<td style={{ width: '70px', textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>롯데</td>
															<td style={{ textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>블랙앵거스</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="table-cell">
												<table>
													<tbody>
														<tr>
															<td rowSpan={5}>문화/여가</td>
															<td rowSpan={5} style={{ width: '120px' }}>
																기타
															</td>
															<td
																rowSpan={5}
																style={{ width: '70px', textAlign: 'right' }}
															>
																3652
															</td>
															<td
																rowSpan={5}
																style={{ width: '110px', textAlign: 'right' }}
															>
																284
															</td>
															<td style={{ width: '140px' }}>문화</td>
															<td style={{ width: '70px', textAlign: 'right' }}>515</td>
														</tr>
														<tr>
															<td>콘텐츠</td>
															<td style={{ textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>뉴스</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
														<tr>
															<td>행사</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
														<tr>
															<td>방송</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* //table-header */}
									</div>
								</Table>
							</CardContents>
						</Card>
					</div>
					<div className="col-6">
						<div className="card">
							<div className="card-header">연관어 분류 트리 (가공 : 분야)</div>
							<div className="card-contents">
								<div className="table-container type1 asso-category-tree">
									<div className="table-header">
										<table>
											<tbody>
												<tr>
													<th style={{ textAlign: 'left' }}>대분류</th>
													<th style={{ width: '70px', textAlign: 'center' }}>건수</th>
													<th style={{ width: '110px', textAlign: 'right' }}>연관어 갯수</th>
													<th style={{ width: '140px', textAlign: 'left' }}>연관어</th>
													<th style={{ width: '70px', textAlign: 'right' }}>건수</th>
												</tr>
											</tbody>
										</table>
									</div>
									{/* //table-header */}
									<div className="ps-scrollbar" style={{ height: '500px' }}>
										<div className="table-body cell-border">
											<div className="table-cell">
												<table>
													<tbody>
														<tr>
															<td rowSpan={3}>브랜드</td>
															<td
																rowSpan={3}
																style={{ width: '70px', textAlign: 'right' }}
															>
																4,523
															</td>
															<td
																rowSpan={3}
																style={{ width: '110px', textAlign: 'right' }}
															>
																522
															</td>
															<td style={{ width: '140px' }}>cj</td>
															<td style={{ width: '70px', textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>롯데</td>
															<td style={{ textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>블랙앵거스</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="table-cell">
												<table>
													<tbody>
														<tr>
															<td rowSpan={3}>브랜드</td>
															<td
																rowSpan={3}
																style={{ width: '70px', textAlign: 'right' }}
															>
																4,523
															</td>
															<td
																rowSpan={3}
																style={{ width: '110px', textAlign: 'right' }}
															>
																522
															</td>
															<td style={{ width: '140px' }}>cj</td>
															<td style={{ width: '70px', textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>롯데</td>
															<td style={{ textAlign: 'right' }}>29</td>
														</tr>
														<tr>
															<td>블랙앵거스</td>
															<td style={{ textAlign: 'right' }}>25</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* //table-header */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
